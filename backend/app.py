from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# ---------------- HOME ----------------

@app.route("/")
def home():
    return "SkillForge AI Backend Running Successfully 🚀"


# ---------------- SIGNUP ----------------

@app.route("/signup", methods=["POST"])
def signup():

    data = request.get_json()

    fullname = data["fullname"]
    email = data["email"]
    password = data["password"]

    conn = sqlite3.connect("skillforge.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO users(fullname,email,password) VALUES(?,?,?)",
        (fullname, email, password)
    )

    conn.commit()
    conn.close()

    return jsonify({"message": "User Registered Successfully"})


# ---------------- LOGIN ----------------

@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data["email"]
    password = data["password"]

    conn = sqlite3.connect("skillforge.db")
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fullname FROM users WHERE email=? AND password=?",
        (email, password)
    )

    user = cursor.fetchone()

    conn.close()

    if user:
        return jsonify({
            "success": True,
            "fullname": user[0]
        })

    return jsonify({
        "success": False,
        "message": "Invalid Email or Password"
    }), 401


# ---------------- USERS ----------------

@app.route("/users", methods=["GET"])
def users():

    conn = sqlite3.connect("skillforge.db")
    cursor = conn.cursor()

    cursor.execute("SELECT fullname,email FROM users")

    users = cursor.fetchall()

    conn.close()

    data = []

    for user in users:
        data.append({
            "fullname": user[0],
            "email": user[1]
        })

    return jsonify(data)


# ---------------- DELETE USER ----------------

@app.route("/delete-user/<email>", methods=["DELETE"])
def delete_user(email):

    conn = sqlite3.connect("skillforge.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM users WHERE email=?",
        (email,)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "User Deleted Successfully"
    })


# ---------------- ENROLL COURSE ----------------

@app.route("/enroll", methods=["POST"])
def enroll():

    data = request.get_json()

    email = data["email"]
    course = data["course"]

    conn = sqlite3.connect("skillforge.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO enrollments(email,course) VALUES(?,?)",
        (email, course)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Course Enrolled Successfully"
    })


# ---------------- RUN SERVER ----------------

if __name__ == "__main__":
    @app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    message = data.get("message", "").lower()

    if "hello" in message or "hi" in message:
        reply = "Hello! 👋 Welcome to SkillForge AI."

    elif "python" in message:
        reply = "Python is a powerful programming language used for AI, Web Development, Data Science, and Automation."

    elif "java" in message:
        reply = "Java is an object-oriented programming language widely used for enterprise and Android development."

    elif "html" in message:
        reply = "HTML is the standard markup language used to create web pages."

    elif "css" in message:
        reply = "CSS is used to style HTML pages and make websites attractive."

    elif "javascript" in message:
        reply = "JavaScript makes web pages interactive by handling user actions and dynamic content."

    else:
        reply = "Sorry, I don't know that yet. More AI features will be added soon."

    return jsonify({
        "reply": reply
    })
    app.run(debug=True)
@app.route("/my-courses/<email>", methods=["GET"])
def my_courses(email):

    conn = sqlite3.connect("skillforge.db")
    cursor = conn.cursor()

    cursor.execute(
        "SELECT course FROM enrollments WHERE email=?",
        (email,)
    )

    courses = cursor.fetchall()

    conn.close()

    data = []

    for course in courses:
        data.append({
            "course": course[0]
        })

    return jsonify(data)