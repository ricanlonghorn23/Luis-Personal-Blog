const toggleModeButton = document.getElementById("toggleMode");

// Function to toggle light/dark mode
toggleModeButton.addEventListener("click", function(event) {
    document.body.classList.toggle("dark-mode");
    event.preventDefault();
});
document.getElementById("mainButton").addEventListener("click", function(event) {
    window.location.href = "blog.html";
    event.preventDefault();
});
// Function to check and set initial mode based on local storage
function checkAndSetInitialMode() {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
        document.body.classList.add("dark-mode");
    }
}

checkAndSetInitialMode();

const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const messageElement = document.getElementById("message");

    if (username && title && content) {
        const blog = { username, title, content };
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.push(blog);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        window.location.href = "blog.html";
    } 
    else {
        messageElement.textContent = "Please complete all the form fields before moving forward";
        setTimeout(function() {
            messageElement.textContent = "";
        }, 3000); 
    }
});