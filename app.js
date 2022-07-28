const container = document.querySelector(".container");
const rgbBtn = document.querySelector("#rgb");
const eraseBtn = document.querySelector("#erase");
const clearBtn = document.querySelector("#clear");
const colorBtn = document.querySelector("#color");
const colorPicker = document.querySelector("#colorPicker");

function Prompt() {
    let number = prompt("Choose number between 5 - 65");
    if (number >= 5 && number <= 65) {
        makeGrid(number);
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

const squares = document.querySelectorAll(".square");
for (let square of squares) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
}
rgbBtn.addEventListener("click", () => {
    for (let square of squares) {
        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const randColor = `rgb(${r}, ${g}, ${b})`;
            square.style.backgroundColor = randColor;
        })
    }
})
eraseBtn.addEventListener("click", () => {
    for (let square of squares) {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        })
    }
})

clearBtn.addEventListener("click", () => {
    for (let square of squares) {
        square.style.backgroundColor = "white";
    }
})

colorBtn.addEventListener("click", () => {
    for (let square of squares) {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = colorPicker.value;
        })
    }
})