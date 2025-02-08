document.addEventListener("DOMContentLoaded", () => {
    const fm = document.querySelector(".form");
    const signup = document.querySelector(".signup_link");
    const signin = document.querySelector(".signin_link");

    if (!fm || !signup || !signin) {
        console.error("One or more elements not found!");
        return;
    }

    signup.addEventListener("click", (e) => {
        e.preventDefault();  // Stop the default link action
        fm.classList.add("active");
    });

    signin.addEventListener("click", (e) => {
        e.preventDefault();  // Stop the default link action
        fm.classList.remove("active");
    });
});
