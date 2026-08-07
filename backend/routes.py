from flask import Blueprint, jsonify

routes = Blueprint("routes", __name__)

# ---------------- HOME ----------------

@routes.route("/")
def home():
    return jsonify({
        "message": "Welcome to SkillForge AI 🚀"
    })


# ---------------- COURSES ----------------

@routes.route("/courses")
def courses():

    data = [
        {
            "id": 1,
            "course": "Python Programming",
            "duration": "8 Weeks",
            "level": "Beginner"
        },
        {
            "id": 2,
            "course": "Web Development",
            "duration": "10 Weeks",
            "level": "Intermediate"
        },
        {
            "id": 3,
            "course": "Java Programming",
            "duration": "6 Weeks",
            "level": "Beginner"
        },
        {
            "id": 4,
            "course": "Flask Development",
            "duration": "6 Weeks",
            "level": "Advanced"
        }
    ]

    return jsonify(data)


# ---------------- JOBS ----------------

@routes.route("/jobs")
def jobs():

    jobs = [
        {
            "company": "Infosys",
            "role": "Frontend Developer",
            "location": "Pune"
        },
        {
            "company": "TCS",
            "role": "Python Developer",
            "location": "Hyderabad"
        },
        {
            "company": "Wipro",
            "role": "Full Stack Developer",
            "location": "Bangalore"
        }
    ]

    return jsonify(jobs)


# ---------------- AI RECOMMENDATION ----------------

@routes.route("/recommend")
def recommend():

    recommendations = [
        "Python Programming",
        "Machine Learning",
        "Flask Development"
    ]

    return jsonify(recommendations)