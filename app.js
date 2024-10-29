function changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.querySelector(`.changeHoja`).innerHTML = (`<h2>BACKGROUND-COLOUR : ${randomColor}</h2>`);
}