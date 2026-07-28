from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "SkillForge AI Backend Running Successfully 🚀"

if __name__ == "__main__":
    app.run(debug=True)

    from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/")
def home():
    return "SkillForge AI Backend Running 🚀"

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

    return jsonify({
        "message": "User Registered Successfully"
    })

if __name__ == "__main__":
    app.run(debug=True)