function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {

    // TODO: Create a standard 52-card deck (or 104 if numDecks is 2).
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

    function generateDeck() { //function to generate unique card deck
        const deck = [];
        for (const suit of suits) {
            for (const value of values) {
                deck.push(`${value} of ${suit}`);
            }
        }
        return deck;
    }

    let cardDeck = generateDeck();
    
    // If numDecks is != 1
    cardDeck = cardDeck.concat(...Array(numDecks - 1).fill(generateDeck()).flat());

    function getRequestedCards(numPlayers, cardsPerPlayer, cardDeck) {//checks if values are negative integers and if req card is more than card deck
        if ((Number.isInteger(numPlayers) && numPlayers > 0) && (Number.isInteger(cardsPerPlayer) && cardsPerPlayer > 0)) {
            const requestedCards = numPlayers * cardsPerPlayer;
            if (requestedCards > cardDeck.length) {
                throw new Error("The requested cards exceed the deck size.");
            }
        } else {
            throw new Error("Invalid input: numPlayers and cardsPerPlayer must be positive integers.");
        }
    }
    getRequestedCards(numPlayers, cardsPerPlayer, cardDeck);

    function shuffleDeck(deck) {//shuffle deck
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];  // Swap
        }
    }

    shuffleDeck(cardDeck);

    const hands = [];
    for (let i = 0; i < numPlayers; i++) {
        hands.push(cardDeck.splice(0, cardsPerPlayer)); // Deal cards for each player
    }
    return hands;
}

export default shuffleAndDeal;



