window.addEventListener("load", setUpPage);
// -----------------------------------------------------------------------
function setUpPage () {

  // initialize whatever variables you need and add your event listeners
  // you can (but probably shouldn't) define functions inside this function
  document.getElementById("x-score").innerHTML = 0;
  document.getElementById("o-score").innerHTML = 0;

  var elements = document.getElementsByClassName("board-tile");
	for (var i = 0; i < elements.length; i++){
		elements[i].addEventListener("click", playerMove);
	}
}


// -----------------------------------------------------------------------

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

// function playerMove () {
// 	alert("Warning");
// }

// VARIABLES

var playerTurn = 0
var board = [["", "", ""], ["","",""], ["", "",""]]

// ----------------------------------------------------------------------- 

function playerMove () {
	var xO = "";
	if(playerTurn % 2 === 0){
    xO = "X";
  } else {
    xO = "O";
  }
  this.innerHTML = xO;

  this.removeEventListener("click", playerMove);

  switch(this.id) {
  case "tile-1-1":
    board[0][0] = xO;
    break;
  case "tile-1-2":
    board[0][1] = xO;
    break;
  case "tile-1-3":
    board[0][2] = xO;
    break;
  case "tile-2-1":
    board[1][0] = xO;
    break;
  case "tile-2-2":
    board[1][1] = xO;
    break;
  case "tile-2-3":
    board[1][2] = xO;
    break;
  case "tile-3-1":
    board[2][0] = xO;
    break;
  case "tile-3-2":
    board[2][1] = xO;
    break;
  case "tile-3-3":
    board[2][2] = xO;
    break;
	}

  var playerWin = false;
 

  
  playerTurn++;

  var playerWin = board[0][0] === xO && board[0][1] === xO && board[0][2] === xO //row 1
  								board[1][0] === xO && board[1][1] === xO && board[1][2] === xO //row 2
  								board[2][0] === xO && board[2][1] === xO && board[2][2] === xO //row 3
  								board[0][0] === xO && board[1][0] === xO && board[2][0] === xO //col 1
  								board[0][1] === xO && board[1][1] === xO && board[2][1] === xO //col 2
  								board[0][2] === xO && board[1][2] === xO && board[2][2] === xO //col 3
  								board[0][0] === xO && board[1][1] === xO && board[2][2] === xO //diag1
  								board[0][2] === xo && board[1][1] === xO && board[2][0] === xO //diag2


  if(playerWin){
  }

  if(playerTurn === 8){
  } 
  else {
    
    if(playerTurn % 2 === 0){
      var showX = document.getElementById("player-x-ready");
      	addClass(showX, "visible");
      	removeClass(showX, "hidden");
      var hideO = document.getElementById("player-o-ready");
      	addClass(hideO, "hidden");
      	removeClass(hideO, "visible");
    } 
    else {
      var showO = document.getElementById("player-o-ready");
      	addClass(showO, "visible");
      	removeClass(showO, "hidden");
      var hideX = document.getElementById("player-x-ready");
      	addClass(hideX, "hidden");
      	removeClass(hideX, "visible");
    }
  }
}