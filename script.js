
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var formDataObject = {};
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    alert(JSON.stringify(formDataObject, null, 2));
});

const form = document.getElementById("contactForm")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem("formData", JSON.stringify(formData))
    formData.reset();
    alert("Sukses");
})

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader-wrapper");
        preloader.classList.add("hide-preloader");
    }, 2000);
});

const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
    link.addEventListener("click", () => {
        showPreloader();
    });
});

function showPreloader() {
    const preloader = document.querySelector(".preloader-wrapper");
    preloader.classList.remove("hide-preloader");

    setTimeout(() => {
        preloader.classList.add("hide-preloader");
    }, 800);
}

function hidePreloader() {
    const preloader = document.querySelector(".preloader-wrapper");
    preloader.classList.add("hide-preloader");
}

const socialMediaIcons = [
    { name: "Facebook", icon: "ri-facebook-circle-line", link: "https://www.facebook.com/chandraphang.chandraphang.3/" },
    { name: "GitHub", icon: "ri-github-fill", link: "https://github.com/Syzinx" },
    { name: "Instagram", icon: "ri-instagram-line", link: "https://www.instagram.com/chandraphng/" }
];

const socialMediaIconsContainer = document.getElementById("socialMediaIcons");
const iconElements = socialMediaIconsContainer.querySelectorAll(".icon i");

iconElements.forEach((iconElement, index) => {
    iconElement.classList.remove(iconElement.classList[1]);
    iconElement.classList.add(socialMediaIcons[index].icon); 
    const iconLink = socialMediaIconsContainer.children[index]; 
    iconLink.href = socialMediaIcons[index].link; 
});


document.getElementById("lightModeButton").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll("section").forEach(section => {
        section.classList.toggle("light-mode");
    });
    document.querySelectorAll(".icon i").forEach(icon => {
        icon.classList.toggle("light-mode-icon");
    });

    const button = document.getElementById("lightModeButton");
    const currentText = button.innerText;

    if (currentText === "Light Mode") {
        button.innerText = "Dark Mode";
    } else {
        button.innerText = "Light Mode";
    }
});
