


var losses = 1;
var wins = 0;
var guessesLeft = 9;
var letterBank = [ 
					"Q", "W", "E", "R",
					"T", "Y", "U", "I",
					"O", "P", "A", "S",
					"D", "F", "G", "H",
					"J", "K", "L", "Z",
					"X", "C", "V", "B",
					"N", "M"
				 ];
var computerChoice = letterBank[Math.floor(Math.random() * letterBank.length)];
var userChoice = [];

//document.getElementById("pcchoice").addEventListener("click", function(){
//	console.log("computer " + computerChoice);
//})
//
//document.getElementById("userchoice").addEventListener("click", function(){
//	console.log("user "+ userChoice);
//})

function makeButton (id) {
	document.getElementById(id).addEventListener("click", function(){
		userChoice = id;
	})
}
makeButton ("Q");
makeButton ("W");
makeButton ("E");
makeButton ("R");
makeButton ("T");
makeButton ("Y");
makeButton ("U");
makeButton ("I");
makeButton ("O");
makeButton ("P");
makeButton ("A");
makeButton ("S");
makeButton ("D");
makeButton ("F");
makeButton ("G");
makeButton ("H");
makeButton ("J");
makeButton ("K");
makeButton ("L");
makeButton ("Z");
makeButton ("X");
makeButton ("C");
makeButton ("V");
makeButton ("B");
makeButton ("N");
makeButton ("M");

document.getElementById("Guesses").innerHTML = userChoice;

document.getElementById("Background").addEventListener("click", function(){
	if (userChoice === computerChoice) { alert("That's the one!");
	wins++; };
})

document.getElementById("Background").addEventListener("click", function(){
	document.getElementById("Guesses").innerHTML = userChoice;
})

document.getElementById("TryAgain").addEventListener("click", function(){
	computerChoice = letterBank[Math.floor(Math.random() * letterBank.length)]
	guessesLeft = 9;

})

document.getElementById("Background").addEventListener("click", function(){
	if (userChoice === computerChoice) {
		document.getElementById("Wins").innerHTML = wins;
	}
})

document.getElementById("Background").addEventListener("click", function(){
	if (userChoice != computerChoice) {
		document.getElementById("gLeft").innerHTML = guessesLeft;
		guessesLeft--;
	}
})

document.getElementById("Background").addEventListener("click", function(){
	if (guessesLeft == -2) {
		alert("Game Over! Try Again!");
		document.getElementById("Losses").innerHTML = losses;
		losses++;
	}
})

if (userChoice === computerChoice) {
	guessesLeft = 9;
}