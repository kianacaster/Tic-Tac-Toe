/* Tic Tac Toe in JavaScript using p5.js (by Kian Acaster)*\
*  Right now, the code is terrible and it will change drastically when I work on it more.
*  -- Aims for this project:
*  • Working CP vs User,
*  • Online gameplay (maybe),
*  • Eventually converting to native JS (just for the sake of it),
*  -- [Personal Goals] -- 
*  • Learn more JavaScript,
*  • Be more efficient with code,	
*  • Actually finish a project.
*/


var turn = 0; // Keeps track of who's turn it is
function setup(){
	createCanvas(610,610);
	// Generates the grid to play on (3x3)
	for(var i = 0; i < width; i += width / 3){
		for(var j = 0; j < height; j += height / 3){
			rect(i,j,width / 3,height / 3);
		}
	}
}

// A function that draws an X 
function cross(x1,y1,x2,y2){
	line(x1,y1,x2,y2);
	line(x2,y1,x1,y2);
}

// If the mouse is pressed...
function mousePressed(){
	var gridPosX; // Variables for the X and Y position of the mouse but assigned to 3rds of the canvas
	var gridPosY;
	
	// Testing to see which 3rd of the canvas that the mouse is on, both X and Y, therefore which square it's on
	if(mouseX > 0 && mouseX < width / 3){
		gridPosX = 0;
	}else if(mouseX > width / 3 && mouseX < (width / 3) * 2){
		gridPosX = width / 3;
	}else if(mouseX > (width / 3) * 2 && mouseX < width){
		gridPosX = (width / 3) * 2
	}
	
	if(mouseY > 0 && mouseY < height / 3){
		gridPosY = 0;
	}else if(mouseY > height/ 3 && mouseY < (height / 3) * 2){
		gridPosY = height / 3;
	}else if(mouseY > (height / 3) * 2 && mouseY < height){
		gridPosY = (height / 3) * 2
	}
	
	// Seeing who's turn it is - 0 is X's, 1 is O's
	if(turn == 0){
		// If it's X's turn, and the mouse is pressed, draw a cross on the 
		// square the mouse is on and advance the turn.
		stroke(255,0,0); 
		strokeWeight(5);
		cross(gridPosX, gridPosY, gridPosX + width / 3, gridPosY + width / 3);
		turn++;
	}else if(turn == 1){
		// If it's O's turn, and the mouse is pressed, draw a circle on the 
		// square the mouse is on and advance (or de-advance) the turn.
		stroke(0);
		ellipse(gridPosX + (width / 3) / 2, gridPosY + (width / 3) / 2, (width / 3) - 10, (height / 3) - 10);
		turn--;
	}
}
