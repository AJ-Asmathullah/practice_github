const themeButton = document.getElementById("themeButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent =
        "Thank you, " + name + "! Your message has been sent successfully.";

    contactForm.reset();
});

const projectButtons = document.querySelectorAll(".project-button");

projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("This project page will be added soon.");
    });
});