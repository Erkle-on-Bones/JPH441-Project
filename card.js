class Card {
    /* 
    Examples for using the card class:
    
    In order to create a new instance of a card, do this:
    
    const mainCard = new Card("mainCard", {
        title: "Main Card",
        gold: 20,
        goldPerTurn: 3,
        happiness: 15,
        science: 8
    });

    In order to add a soft or hard child, you can write 

    mainCard.addHardChild(childCard);
    mainCard.addSoftChild(childCard);

    where childCard is another card that we want to be a child of the mainCard.

    
    If we want to check if the card is selected, you can use:

    if (mainCard.selected) {
        console.log("Main card is selected!");
    } else {
        console.log("Main card is not selected.");
    } 
    */


    constructor(cardId, initialAttributes) {
        this.cardElement = document.getElementById(cardId);
        this.cardAttributes = initialAttributes;
        this.selected = false;
        this.hardChildren = [];
        this.softChildren = [];

        this.cardElement.addEventListener("click", () => {
            this.toggleSelected();
        });

        this.initializeCard();
    }

    initializeCard() {
        const titleElement = this.cardElement.querySelector(".title");
        const goldElement = this.cardElement.querySelector(".gold-value");
        const goldPerTurnElement = this.cardElement.querySelector(".gold-per-turn-value");
        const happinessElement = this.cardElement.querySelector(".happiness-value");
        const scienceElement = this.cardElement.querySelector(".science-value");

        titleElement.textContent = this.cardAttributes.title;
        goldElement.textContent = `Gold: ${this.cardAttributes.gold}`;
        goldPerTurnElement.textContent = `Gold per Turn: ${this.cardAttributes.goldPerTurn}`;
        happinessElement.textContent = `Happiness: ${this.cardAttributes.happiness}`;
        scienceElement.textContent = `Science: ${this.cardAttributes.science}`;
        // Add more elements as needed
    }
    toggleSelected() {
        this.selected = !this.selected;
        // You can add more logic here if needed
    }

    // Function to add a hard child to the card
    addHardChild(childCard) {
        this.hardChildren.push(childCard);
        // Update the displayed number of hard children
        this.updateHardChildrenCount();
    }

    // Function to add a soft child to the card
    addSoftChild(childCard) {
        this.softChildren.push(childCard);
        // Update the displayed number of soft children
        this.updateSoftChildrenCount();
    }
}