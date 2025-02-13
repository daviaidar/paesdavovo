document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    const links = document.querySelectorAll("nav a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

   

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Highlight Active Section in Nav
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", e => {
        const name = document.querySelector("#nome");
        const message = document.querySelector("#mensagem");

        if (!name.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });
});
document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault(); // Evita o comportamento padrão
    document.querySelector("#contato").scrollIntoView({ 
        behavior: "smooth" 
    });
});
document.getElementById("contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    let phone = "5517997449017"; 

    let text = `Olá, meu nome é ${name}%0A${message}`;

    let url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank"); // Abre o WhatsApp
});