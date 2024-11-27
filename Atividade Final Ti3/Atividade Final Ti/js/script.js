window.addEventListener("scroll", function() {
    const heroSection = document.querySelector(".hero");
    if (window.scrollY > 50) {
        heroSection.classList.add("scrolled");
    } else {
        heroSection.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    mainContent.classList.add("loaded");

    sidebar.addEventListener("mouseover", () => {
        sidebar.classList.add("expanded");
        mainContent.classList.add("expanded");
    });
    
    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.remove("expanded");
        mainContent.classList.remove("expanded");
    });

    fetch("sidebar.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector(".sidebar-container").innerHTML = html;

            const currentPath = window.location.pathname.split("/").pop();
            document.querySelectorAll(".nav-link").forEach(link => {
                if (link.getAttribute("href") === currentPath) {
                    link.classList.add("active-link");
                }
            });
        });
});
