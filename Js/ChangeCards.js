function changeCard(event) {
    let clickedCard = event.currentTarget; 
    let currentCard = document.getElementById('crr-card');

    if (clickedCard.id !== 'crr-card') {
        
        if (currentCard) {
            currentCard.removeAttribute('id');
            let currentCardName = currentCard.querySelector('.name');
            if (currentCardName) {
                currentCardName.classList.add('hidden');
            }
        }

        clickedCard.id = 'crr-card';
        let clickedCardName = clickedCard.querySelector('.name');
        if (clickedCardName) {
            clickedCardName.classList.remove('hidden');
        }
    }
}



