// Configuração do Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#42a5d6" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#42a5d6", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
    }
});

function toggleImages() {
    // Seleciona todos os containers de imagem
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const topImage = container.querySelector('.top-image');
        const bottomImage = container.querySelector('.bottom-image');

        // Alterna a opacidade das imagens
        if (topImage.style.opacity === '1') {
            topImage.style.opacity = '0';
            bottomImage.style.opacity = '1';
        } else {
            topImage.style.opacity = '1';
            bottomImage.style.opacity = '0';
        }
    });
}

// Define o intervalo de tempo para alternar as imagens (em milissegundos)
setInterval(toggleImages, 3000); // Troca a cada 3 segundos

document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("active");
});
