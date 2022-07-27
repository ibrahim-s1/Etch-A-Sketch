const container = document.querySelector(".container");

function Prompt() {
    let number = prompt("Choose number between 5 - 60");
    if (number >= 5 && number <= 60) {
        makeGrid(number)
    }
}
Prompt()
function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const createDiv = document.createElement("div");
            createDiv.classList.add("square");
            createDiv.style.width = `${500 / num}px`;
            createDiv.style.height = `${500 / num}px`;
            container.append(createDiv);
        }
    }
}

const squares = document.querySelector(".square");
for (let square of squares) {
    square.addEventListener("click", (e) => {
        e.style.backgroundColor = rgb(0, 0, 0);
    })
}
