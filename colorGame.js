var numberOfSquares = 6;
var colors = [];
var colorPicked;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numberOfSquares = 3;
				//console.log(3, numberOfSquares);
			} else {			
				numberOfSquares = 6;
				//console.log(6, numberOfSquares);
			}
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if (clickedColor === colorPicked) {
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numberOfSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i] !== undefined) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});



function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var result = Math.floor(Math.random() * colors.length);
	return colors[result];
}

function generateRandomColors(amount) {
	var array = [];
	for (var i = 0; i < amount; i++) {
		array[i] = generateColor();
	}
	return array;
}

function generateColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}

