const student = localStorage.getItem("fullname") || "Student";

const course = localStorage.getItem("course") || "Python Programming";

document.getElementById("studentName").innerHTML = student;

document.getElementById("courseName").innerHTML = course;

document.getElementById("date").innerHTML =
new Date().toLocaleDateString();

document.getElementById("certificateId").innerHTML =
"SF-" + Math.floor(Math.random()*1000000);