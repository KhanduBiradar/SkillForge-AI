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
