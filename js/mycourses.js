// =============================
// SkillForge AI - My Courses
// =============================

// Continue Learning Button

const buttons = document.querySelectorAll(".course-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("📚 Course opened successfully!\nHappy Learning 🚀");

    });

});

// Progress Bar Animation

const progressBars = document.querySelectorAll(".progress");

progressBars.forEach(bar => {

    const width = bar.style.width;

    bar.style.width = "0%";

    setTimeout(() => {

        bar.style.width = width;

        bar.style.transition = "width 1.5s ease";

    }, 300);

});

// Welcome Message

window.addEventListener("load", () => {

    console.log("Welcome to SkillForge AI - My Courses");

});