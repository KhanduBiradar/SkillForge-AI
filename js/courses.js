
async function enrollCourse(course) {

    const email = localStorage.getItem("email");

    if (!email) {
        alert("Please login first.");
        return;
    }

    // Certificate साठी course save
    localStorage.setItem("course", course);

    try {

        const response = await fetch("http://127.0.0.1:5000/enroll", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                course
            })

        });

        const result = await response.json();

        alert(result.message);

    } catch (error) {

        console.error(error);

        alert("Enrollment Failed");

    }

}