let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');

let score = document.getElementById('score');
let result = document.getElementById('result');
let scorevalue = document.getElementById('scorevalue');

const low = "Your Health is not good"
const good = "Your Health is good"
const high = "Your Health is not good"
const form ="Fill out the form"



button.addEventListener('click', function() {
    let newHeight =  parseFloat(height.value);
    let newWeight =  parseFloat(weight.value);
    let newHeightMetre = newHeight * 0.305;
    let sqrHeight = newHeightMetre * newHeightMetre;
    let bmi = newWeight / sqrHeight; 
    score.textContent = bmi.toFixed(1);
    result.style.display = "block";

    if (score.textContent < 18.6) {
        score.style.background = "#f39c12";
        scorevalue.innerText = low;
    }else if (score.textContent < 24.9) {
        score.style.background = "#2ecc71";
        scorevalue.innerText = good;
    }else if (score.textContent < 1000) {
        score.style.background = "#e74c3c";
        scorevalue.innerText = high;
    }else{
        scorevalue.innerText = form;
    }

});