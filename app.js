const container = document.querySelector(".container");
const rgbBtn = document.querySelector("#rgb");
const eraseBtn = document.querySelector("#erase");
const clearBtn = document.querySelector("#clear");
const colorBtn = document.querySelector("#color");
const colorPicker = document.querySelector("#colorPicker");
// const pixelSize = document.querySelector("#pixelSize");
function Prompt() {
    let input = prompt("Choose number between 5 - 65");
    if (input >= 5 && input <= 65) {
        makeGrid(input);
    }
    else {
        do {
            input = prompt("Choose number between 5 - 65");
        } while (input < 5 || input > 66)
        makeGrid(input);
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

// not sure why this doesn't work // check back after styling
// pixelSize.addEventListener("input", () => {
//     for (let square of squares) {
//         square.remove();
//     }
//     makeGrid(pixelSize.valueAsNumber)
// })

for (let square of squares) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = colorPicker.value;
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
