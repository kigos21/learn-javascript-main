// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

let containerEl = document.getElementById("container")

for (let i = 0; i < imgs.length; i++) {
    containerEl.innerHTML += `<img src="${imgs[i]}" class="team-img">`
}