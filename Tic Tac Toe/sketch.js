/* Tic Tac Toe in JavaScript using p5.js (by Kian Acaster)*\
*  Current state:
*  The code's horrific and there's a ton of bugs, the canvas system doesn't work properly and it doesn't switch turns. 
*  I'll likely end up rewriting most of it.
*  -- Aims for this project:
*  • Working CP vs User,
*  • Online gameplay (maybe),
*  • Eventually converting to native JS (just for the sake of it),
*  -- [Personal Goals] -- 
*  • Learn more JavaScript,
*  • Be more efficient with code,	
*  • Actually finish a project.
*/


var turn = 0;
var board = ["E","E","E","E","E","E","E","E","E"];	 
var board;
var position = [];
var positions = [0,1,2,3,4,5,6,7,8];
var indPos;
var gridPosX; 
var gridPosY;
function setup(){
	createCanvas(610,610);
	for(var i = 0; i < width; i += width / 3){
		for(var j = 0; j < height; j += height / 3){
			rect(i,j,width / 3,height / 3);
		}
	}
}
function draw(){
	for(var i = 0; i < board.length; i++){
		if(board[i] == "X"){
			stroke(255,0,0);
			strokeWeight(5);
			cross(gridPosX, gridPosY, gridPosX + width / 3, gridPosY + width / 3);	
		}else if(board[i] == "O"){	
			stroke(0);
			ellipse(gridPosX + (width / 3) / 2, gridPosY + (width / 3) / 2, (width / 3) - 10, (height / 3) - 10);
		}
	}
}	
function cross(x1,y1,x2,y2){
	line(x1,y1,x2,y2);
	line(x2,y1,x1,y2);
}

function mousePressed(){
	if(mouseX > 0 && mouseX < width / 3){
		gridPosX = 0;
		position.push(0);
	}else if(mouseX > width / 3 && mouseX < (width / 3) * 2){
		gridPosX = width / 3;
		position.push(1);
	}else if(mouseX > (width / 3) * 2 && mouseX < width){
		gridPosX = (width / 3) * 2
		position.push(2);
	}
	if(mouseY > 0 && mouseY < height / 3){
		gridPosY = 0;
		position.push(0);
	}else if(mouseY > height/ 3 && mouseY < (height / 3) * 2){
		gridPosY = height / 3;
		position.push(1);
	}else if(mouseY > (height / 3) * 2 && mouseY < height){
		gridPosY = (height / 3) * 2
		position.push(2);		
	}
	if(position[0] == 0 && position[1] == 0){
		indPos = 0;
		if(turn == 0){
			board[0] = "X";
		}else if(turn == 1){
			board[0] == "O";
		}
	}
	if(position[0] == 0 && position[1] == 1){
		indPos = 3;
		if(turn == 0){
			board[3] = "X";
		}else if(turn == 1){ 
			board[3] == "O";
		}
	}
	if(position[0] == 0 && position[1] == 2){
		indPos = 6;
		if(turn == 0){
			board[6] = "X";
		}else if(turn == 1){
			board[6] == "O";
		}	
	}
	if(position[0] == 1 && position[1] == 0){
		indPos = 2;
		if(turn == 0){
			board[2] = "X";
		}else if(turn == 1){
			board[2] == "O";
		}
	}
	if(position[0] == 1 && position[1] == 1){
		indPos = 4;
		if(turn == 0){
			board[4] = "X";
		}else if(turn == 1){
			board[4] == "O";
		}	
	}
	if(position[0] == 1 && position[1] == 2){
		indPos = 7;
		if(turn == 0){
			board[7] = "X";
		}else if(turn == 1){
			board[7] == "O";
		}	
	}
	if(position[0] == 2 && position[1] == 0){
		indPos = 2;
		if(turn == 0){
			board[2] = "X";
		}else if(turn == 1){
			board[2] == "O";
		}	
	}
	if(position[0] == 2 && position[1] == 1){
		indPos = 5;
		if(turn == 0){
			board[5] = "X";
		}else if(turn == 1){
			board[5] == "O";
		}	
	}
	if(position[0] == 2 && position[1] == 2){
		indPos = 8;
		if(turn == 0){
			board[8] = "X";
		}else if(turn == 1){
			board[8] == "O";
		}	
	}
	if(turn == 0){ turn = 1; }else if(turn == 1){ turn = 0; }
}

function mouseReleased(){
	position.length = 0;
}
