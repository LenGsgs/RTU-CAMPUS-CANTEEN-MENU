function showCategory(category) {
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".filters button");

    // FILTER CARDS
    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } 
        else if (card.classList.contains(category)) {
            card.style.display = "block";
        } 
        else {
            card.style.display = "none";
        }
    });

    // ACTIVE BUTTON STYLE
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });
}
