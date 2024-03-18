const toggleModeButton = document.getElementById("toggleMode");
const blogPostsContainer = document.getElementById("blogPosts");

/* Function to toggle between light & dark mode */
toggleModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

backButton.addEventListener("click", function() {
    window.location.href = 'index.html';
});

/* Function to render blog posts from localStorage*/
function renderBlogPosts() {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogPostsContainer.innerHTML = "";
    blogs.forEach(blog => {
        const post = document.createElement("div");
        post.classList.add("blog-post");
        post.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
            <p>Thought was from: ${blog.username}</p>
        `;
        blogPostsContainer.appendChild(post);
    });
}

renderBlogPosts();