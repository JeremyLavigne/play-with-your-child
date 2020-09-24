export const shuffle = (cards) => {
    const shuffledCards = [];

    while (cards.length > 0) { // While there is still something in array
        const indice = Math.floor(Math.random() * cards.length); // Pick one
        shuffledCards.push(cards[indice]); // Push in new Array
        cards.splice(indice,1) // Remove it
    }

    return shuffledCards;
}

export const pickRandom = (numberOfPairs) => {
    const cards = [];
    const alreadyPickedIndex = [];
    let id = 1;
    let pairId = 1;

    for (let i=0 ; i < numberOfPairs; i++) {

        let index = 0;
        do {
            index = Math.floor(Math.random() * 13);
        }while (alreadyPickedIndex.includes(index))

        alreadyPickedIndex.push(index)

        cards.push({
            id: id, pairId: pairId, image: index, hidden: true, disabled: null, isTried: false, isSucceded: false
        });
        cards.push({
            id: id+1, pairId: pairId, image: index, hidden: true, disabled: null, isTried: false, isSucceded: false
        });

        id += 2;
        pairId ++;
    }

    const shuffledCards = shuffle(cards);

    return shuffledCards;
}