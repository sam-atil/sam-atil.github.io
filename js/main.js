//================================
//Projects Page - Filtering Logic
//================================

const buttons = document.querySelectorAll('.filter-btn')
const project_cards = document.querySelectorAll('.project-card')

buttons.forEach(btn => {
    btn.addEventListener('click', () =>{
        const type = btn.dataset.type;

        project_cards.forEach(card =>{
            if (type == "All" || card.dataset.type === type) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    });
});