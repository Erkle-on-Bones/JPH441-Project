// Background
document.getElementById("upgradeButton").addEventListener("click", upgradeImage);
const upgradeButton = document.getElementById("upgradeButton");
upgradeButton.disabled = true; // Initially disable the upgrade button

const images = [ 
    "library/backgrounds/stone_age.png",
    "library/backgrounds/medieval.png",
    "library/backgrounds/future.png",
    // ... add more images as needed
];
const ages = [
    "Stone age",
    "Medieval age",
    "Future age"
];
let currentImageIndex = 0;
let ageIndex = 0;
let cardsUsed = 0;

function upgradeImage() {
    if (currentImageIndex === images.length - 1) {
        alert("You have reached the end."); // Display message
        return; // Exit the function to prevent further changes
    }
    currentImageIndex = (currentImageIndex + 1) % images.length; // Increment and loop back to 0 if at the end
    const imageDisplay = document.getElementById("imageDisplay");
    imageDisplay.src = images[currentImageIndex]; // Update the image source

    // text display of what age user is on
    if (ageIndex < ages.length - 1) {
        ageIndex++;
    }
    updateAgeDisplay();
    updateStoryBar("You have advanced to the " + ages[ageIndex])
}

function updateAgeDisplay() {
    const ageDisplay = document.getElementById("currentAge");
    ageDisplay.textContent = `Current Age: ${ages[ageIndex]}`;
}



// Card drawing
document.getElementById("drawButton").addEventListener("click", drawCard);
let deck = [
    { name: 'Happiness', cost: 5, increase: 10, description: 'Your people are more happy.' },
    { name: 'Wealth', cost: 8, increase: 15, description: 'It gives you more money.'},
    { name: 'Support', cost: 3, increase: 5, description: 'People support you more.' },
    // ... other cards
];
let resources = {
    Happiness: 100,
    Wealth: 100,
    Support: 100
};

function drawCard() {
    if (deck.length === 0) {
        alert("No more cards in the deck");
        return;
    }

    const cardIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(cardIndex, 1)[0];
    displayCard(card);
}

function displayCard(card) {
    const cardDisplay = document.getElementById("cardDisplay");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = card.name;
    cardElement.appendChild(cardTitle);

    const cardCost = document.createElement("div");
    cardCost.classList.add("card-cost");
    cardCost.textContent = `Cost: ${card.cost}`;
    cardElement.appendChild(cardCost);

    const cardIncrease = document.createElement("div");
    cardIncrease.classList.add("card-increase");
    cardIncrease.textContent = `Increase: ${card.increase}`;
    cardElement.appendChild(cardIncrease);

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = card.description;
    cardElement.appendChild(cardDescription)

    cardElement.onclick = () => useCard(card, cardElement);
    cardDisplay.appendChild(cardElement);
}

function useCard(card, cardElement) {
    resources[card.name.split(' ')[0]] += card.increase;
    updateResourceBars();
    updateStoryBar("You have chosen to upgrade " + card.name)
    removeCard(cardElement);

    //affects upgrade button
    cardsUsed++;
    if (cardsUsed >= 3) { // Change '3' to the number of cards after which the button should be enabled
        upgradeButton.disabled = false; // Enable the upgrade button
    }

}

// Update User Interface
function updateStoryBar(message) {
    const storyBar = document.getElementById("storyBar");
    storyBar.textContent = message;
}

function updateResourceBars() {
    document.getElementById("happinessBar").textContent = `Happiness: ${resources.Happiness}`;
    document.getElementById("wealthBar").textContent = `Wealth: ${resources.Wealth}`;
    document.getElementById("supportBar").textContent = `Support: ${resources.Support}`;
}

function removeCard(cardElement) {
    cardElement.remove(); // Removes the specific clicked card
}


