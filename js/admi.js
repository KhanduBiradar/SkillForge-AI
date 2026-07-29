async function loadUsers() {

    try {

        const response = await fetch("http://127.0.0.1:5000/users");

        const users = await response.json();

        document.getElementById("totalUsers").innerHTML = users.length;

        const table = document.getElementById("userTable");

        table.innerHTML = "";

        users.forEach(user => {

            table.innerHTML += `
                <tr>
                    <td>${user.fullname}</td>
                    <td>${user.email}</td>
                    <td>
                        <button onclick="deleteUser('${user.email}')">
                            Delete
                        </button>
                    </td>
                </tr>
            `;

        });

    } catch (error) {

        console.error(error);
        alert("Unable to load users.");

    }

}

async function deleteUser(email) {

    if (!confirm("Delete this user?")) {
        return;
    }

    try {

        const response = await fetch(`http://127.0.0.1:5000/delete-user/${email}`, {
            method: "DELETE"
        });

        const result = await response.json();

        alert(result.message);

        loadUsers();

    } catch (error) {

        console.error(error);
        alert("Delete failed.");

    }

}

loadUsers();