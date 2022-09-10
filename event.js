//adding event by calling function
function makeRed() {
    document.body.style.backgroundColor = 'yellow';
}

//adding  event by assigning function
const blueButton = document.getElementById('blue-button');
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
blueButton.onclick = makeBlue;

//adding event by anonymous function
const greenButton = document.getElementById('green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}
//adding event by addEventListner
const goldRodButton = document.getElementById('goldrod-button');
goldRodButton.addEventListener('click', makeGoldRod);
function makeGoldRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//directly assingn function to addEventListner
const lightBlueButton = document.getElementById('light-blue-button');
lightBlueButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})

//direct shortcut
document.getElementById('hot-pink-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

