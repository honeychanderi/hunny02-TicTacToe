function clickButton(){
	document.getElementById('start').style.display = "none";
	document.getElementById('game').style.display = "block";
}

document.turn = "X";
document.winner = null;

function startGame(){

	for(var i = 1; i<10; i++){
		reset(i);
	}

	document.turn = "X";
	document.winner = null;
	if(Math.random() < 0.5){
		document.turn = "O";
	}
	
}

var msg = document.getElementById("msg");

function myTurn(square){
	
	if(document.winner != null){
		msg.innerText = document.winner + " already won!";
	}
	else if(square.innerText == ""){
		square.innerText = document.turn;
		swap();
	}
	else{
		msg.innerText = "That is already used!!";
	}
}

function swap(){
	if(checkWinner(document.turn)){
		msg.innerText = document.turn + " Won!";
		document.winner = document.turn;
	} 
	else if(document.turn == "X"){
		document.turn = "O";
	}
	else{
		document.turn = "X";
	}
}

function getValue(num){
	return document.getElementById('s'+num).innerText;
}

function matchRow(x,y,z,move){
	var result = false;
	if(getValue(x) == move && getValue(y) == move && getValue(z) == move){
		result = true;
	}
	return result;
}

function checkWinner(move){
	var result = false;
	if( matchRow(1,2,3,move) || matchRow(4,5,6,move) || matchRow(7,8,9,move) || 
		matchRow(1,4,7,move) || matchRow(2,5,8,move) || matchRow(3,6,9,move) ||
		matchRow(1,5,9,move) || matchRow(3,5,7,move)){
		result = true;
	}
	return result;
}

function reset(num){
	document.getElementById("s" + num).innerText = "";
	msg.innerText = "";
}