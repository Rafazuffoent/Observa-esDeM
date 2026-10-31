// Data final: 31/10/2026 às 11:46
const dataAlvo = new Date(2026, 9, 31, 16, 0, 0).getTime();

const atualizarContador = setInterval(function() {
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;

if (diferenca <= 0) {
    clearInterval(atualizarContador);

    // Configura a identificação de origem
    const meta = document.createElement("meta");
    meta.name = "referrer";
    meta.content = "strict-origin-when-cross-origin";
    document.head.appendChild(meta);

    document.getElementById("countdown").innerHTML = `
        <div>
            <iframe
                width="350"
                height="197"
                src="https://www.youtube.com/embed/QmOFP9zrFY0"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    `;

    return;
}

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(dias).padStart(2, '0');
    document.getElementById("hours").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutos).padStart(2, '0');
    document.getElementById("seconds").innerText = String(segundos).padStart(2, '0');

}, 1000);
