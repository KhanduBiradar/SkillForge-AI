const name = localStorage.getItem("fullname");

document.getElementById("welcomeUser").innerHTML =
"Welcome, " + name + " 👋";