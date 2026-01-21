function login() {
    const status = document.getElementById("status");
    status.textContent = "Online";
    status.classList.remove("offline");
    status.classList.add("online");
}

function logout() {
    const status = document.getElementById("status");
    status.textContent = "Offline";
    status.classList.remove("online");
    status.classList.add("offline");
}

function changeCourse() {
    const course = document.getElementById("course");
    course.textContent =
        course.textContent === "Journalism" ? "Marketing" : "Journalism";
}
