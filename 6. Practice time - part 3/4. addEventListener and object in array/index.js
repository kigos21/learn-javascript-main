let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let janeEl = document.getElementById("jane-btn")
let scoreEl = document.getElementById("score-el")

janeEl.addEventListener("click", function() {
    scoreEl.innerHTML = data[0].score
})