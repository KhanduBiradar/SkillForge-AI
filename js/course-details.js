document.querySelector(".start-btn").addEventListener("click", function () {

    alert("Course Started Successfully 🚀");

});
document.querySelector(".start-btn").addEventListener("click", function () {

    alert("🎉 Congratulations! Course Completed Successfully.");

});
const lessons = document.querySelectorAll(".lesson input");

const progress = document.getElementById("progress");

const progressText = document.getElementById("progressText");

lessons.forEach(box => {

    box.addEventListener("change", updateProgress);

});

function updateProgress(){

    let completed = 0;

    lessons.forEach(box=>{

        if(box.checked){

            completed++;

        }

    });

    const percent = Math.round((completed / lessons.length) * 100);

    progress.style.width = percent + "%";

    progressText.innerHTML = percent + "% Completed";

    if(percent===100){

        alert("🏆 Congratulations!\nCourse Completed Successfully.");

    }

}