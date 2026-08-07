const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// ===========================
// Animated Counter
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {

        const increment = Math.ceil(target / 100);

        if (count < target) {
            count += increment;

            if (count > target) {
                count = target;
            }

            counter.innerText = count;

            setTimeout(updateCounter, 20);
        }
    };

    updateCounter();
});
// ===========================
// Floating Chat Button
// ===========================

const chatButton = document.getElementById("chatButton");

chatButton.addEventListener("click", () => {
    alert("🤖 AI Chat Assistant will be available soon!");
});
// ===========================
// Scroll Reveal Animation
// ===========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Account Created Successfully 🎉");

        window.location.href = "login.html";

    });

}
// Dashboard loaded successfully
console.log("SkillForge AI Dashboard Loaded");
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    try {
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const response = await fetch("http://127.0.0.1:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                password
            })
        });

        const result = await response.json();

       if (response.ok) {
    alert(result.message);
    window.location.href = "login.html";
} else {
    alert(result.message || "Signup failed");
}

    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
});

function enrollCourse(courseName) {

    let courses = JSON.parse(localStorage.getItem("myCourses")) || [];

    if (courses.includes(courseName)) {
        alert("You have already enrolled in this course.");
        return;
    }

    courses.push(courseName);

    localStorage.setItem("myCourses", JSON.stringify(courses));

    alert(courseName + " enrolled successfully!");
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const contactData = {
            name,
            email,
            subject,
            message
        };

        let contacts =
            JSON.parse(localStorage.getItem("contacts")) || [];

        contacts.push(contactData);

        localStorage.setItem("contacts", JSON.stringify(contacts));

        document.getElementById("successMessage").innerHTML =
            "<h3>✅ Message sent successfully!</h3>";

        contactForm.reset();

    });

}