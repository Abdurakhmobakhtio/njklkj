let div = document.querySelector('div');
let h1 = document.querySelector('h1');

let blackBtn = document.querySelector('.black');
let redBtn = document.querySelector('.red');
let clickBtn = document.querySelector('.click');

blackBtn.onclick = function () {
    div.style.backgroundColor = "black";
}

redBtn.onclick = function () {
    div.style.backgroundColor = "red";
}

clickBtn.onclick = function () {
    let number = Math.random() * 100; 
let rounded = Math.round(number);  
h1.textContent = rounded;
}
