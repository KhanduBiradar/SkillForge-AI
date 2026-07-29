import sqlite3

conn = sqlite3.connect("skillforge.db")
cursor = conn.cursor()

# Users Table
cursor.execute("""
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
)
""")

# Enrollments Table
cursor.execute("""
CREATE TABLE IF NOT EXISTS enrollments(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    course TEXT NOT NULL
)
""")

conn.commit()
conn.close()

print("Database Created Successfully ✅")