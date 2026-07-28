from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "SkillForge AI Backend Running Successfully 🚀"


@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    fullname = data["fullname"]
    email = data["email"]
    password = data["password"]

    conn = sqlite3.connect("skillforge.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)",
        (fullname, email, password)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "User Registered Successfully"
    })


if __name__ == "__main__":
    app.run(debug=True)

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
    else:
        return jsonify({
            "success": False,
            "message": "Invalid Email or Password"
        }), 401