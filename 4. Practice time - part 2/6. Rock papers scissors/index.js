let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHandElement() {
    return hands[Math.floor(Math.random() * 3)]
}

console.log(getHandElement())
console.log(getHandElement())
console.log(getHandElement())