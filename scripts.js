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

// Seleciona todos os links dentro do menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelector("nav").classList.remove("active"); // Fecha o menu
    });
});

  document.getElementById("imgClick").addEventListener("click", function() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores digitados pelo usuário
    const nome = encodeURIComponent(document.getElementById("nome").value);
    const empresa = encodeURIComponent(document.getElementById("empresa").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const message = encodeURIComponent(document.getElementById("message").value);

    // Número de telefone do WhatsApp (coloque o número desejado)
    const phoneNumber = "+5511962646785";

    // Monta a mensagem do WhatsApp
    const whatsappMessage = `Olá, Tudo Bem? meu nome é ${nome}%0A%0A` +                            
                            `Represento a ${empresa}%0A%0A` +                            
                            `Meu E-mail é ${email}%0A%0A` +                            
                            `Mensagem: ${message}`;

    // Gera o link do WhatsApp com a mensagem personalizada
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    // Abre o link em uma nova aba
    window.open(whatsappLink, '_blank');
});