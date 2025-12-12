function filtrarSetor(setor) {
    const cards = document.getElementsByClassName("card-servidor");
    const filtro = setor.trim().toLowerCase();

    for (let i = 0; i < cards.length; i++) {
        const data = cards[i].getAttribute("data-setor") || "";

        const setoresCard = data.split(',').map(s => s.trim().toLowerCase());

        if (filtro === "todos" || setoresCard.includes(filtro)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}