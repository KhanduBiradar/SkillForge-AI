async function loadCourses(){

    const email = localStorage.getItem("email");

    const response = await fetch(
        `http://127.0.0.1:5000/my-courses/${email}`
    );

    const courses = await response.json();

    const container =
        document.getElementById("courseContainer");

    container.innerHTML = "";

    courses.forEach(item=>{

        container.innerHTML += `
        <div class="course-card">

            <h2>${item.course}</h2>

            <button onclick="window.location='course-details.html'">
                Continue Learning
            </button>

        </div>
        `;

    });

}

loadCourses();