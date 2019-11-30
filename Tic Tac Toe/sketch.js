// Old project, bodged, works though.

let turn = 0;
let grid = [0,0,0,0,0,0,0,0,0];

function setup(){
	createCanvas(610,610);
	for(let i = 0; i < width; i += width / 3){
		for(var j = 0; j < height; j += height / 3){
			rect(i,j,width / 3,height / 3);
		}
	}
}

function cross(x1,y1,x2,y2){
	line(x1,y1,x2,y2);
	line(x2,y1,x1,y2);
}

function mousePressed(){
	let gridPosX; 
	let gridPosY;
	let Xsq;
	let Ysq;
	
	if(mouseX > 0 && mouseX < width / 3){
		gridPosX = 0;
		Xsq = 0;
	}else if(mouseX > width / 3 && mouseX < (width / 3) * 2){
		gridPosX = width / 3;
		Xsq = 1;
	}else if(mouseX > (width / 3) * 2 && mouseX < width){
		gridPosX = (width / 3) * 2
		Xsq = 2;
	}
	
	if(mouseY > 0 && mouseY < height / 3){
		gridPosY = 0;
		Ysq = 0;
	}else if(mouseY > height/ 3 && mouseY < (height / 3) * 2){
		gridPosY = height / 3;
		Ysq = 1;
	}else if(mouseY > (height / 3) * 2 && mouseY < height){
		gridPosY = (height / 3) * 2;
		Ysq = 2;	
	}
	
	if(turn == 0 && grid[checkSquare(Xsq, Ysq)] == 0){
		grid[checkSquare(Xsq, Ysq)] = 1;
		stroke(255,0,0);
		strokeWeight(5);
		cross(gridPosX, gridPosY, gridPosX + width / 3, gridPosY + width / 3);
		turn++;
	}else if(turn == 1 && grid[checkSquare(Xsq, Ysq)] == 0){
		grid[checkSquare(Xsq, Ysq)] = 2;
		stroke(0);
		ellipse(gridPosX + (width / 3) / 2, gridPosY + (width / 3) / 2, (width / 3) - 10, (height / 3) - 10);
		turn--;
	}
	
	if(checkWin() == 1) console.log("X wins");
	if(checkWin() == 2) console.log("O wins");
}

function checkSquare(x, y){
	let square;
	if(x == 0 && y == 0) square = 0;
	if(x == 1 && y == 0) square = 1;
	if(x == 2 && y == 0) square = 2;
	if(x == 0 && y == 1) square = 3;
	if(x == 1 && y == 1) square = 4;
	if(x == 2 && y == 1) square = 5;
	if(x == 0 && y == 2) square = 6;
	if(x == 1 && y == 2) square = 7;
	if(x == 2 && y == 2) square = 8;

	return square;
}

function checkWin(){
	if(grid[0] == 1 && grid[1] == 1 && grid[2] == 1){
		return 1;
	}
	else if(grid[3] == 1 && grid[4] == 1 && grid[5] == 1){
		return 1;
	}
	else if(grid[6] == 1 && grid[7] == 1 && grid[8] == 1){
		return 1;
	}
	else if(grid[0] == 1 && grid[4] == 1 && grid[8] == 1){
		return 1;
	}
	else if(grid[6] == 1 && grid[4] == 1 && grid[2] == 1){
		return 1;
	}

	if(grid[0] == 1 && grid[3] == 1 && grid[6] == 1){
		return 1;
	}
	else if(grid[1] == 1 && grid[4] == 1 && grid[7] == 1){
		return 1;
	}
	else if(grid[2] == 1 && grid[5] == 1 && grid[8] == 1){
		return 1;
	}






	if(grid[0] == 2 && grid[1] == 2 && grid[2] == 2){
		return 2;
	}
	else if(grid[3] == 2 && grid[4] == 2 && grid[5] == 2){
		return 2;
	}
	else if(grid[6] == 2 && grid[7] == 2 && grid[8] == 2){
		return 2;
	}
	else if(grid[0] == 2 && grid[4] == 2 && grid[8] == 2){
		return 2;
	}
	else if(grid[6] == 2 && grid[4] == 2 && grid[2] == 2){
		return 2;
	} if(grid[0] == 2 && grid[3] == 2 && grid[6] == 2){
		return 2;
	}
	else if(grid[1] == 2 && grid[4] == 2 && grid[7] == 2){
		return 2;
	}
	else if(grid[2] == 2 && grid[5] == 2 && grid[8] == 2){
		return 2;
	}

	else{

		return false;
	}
}
