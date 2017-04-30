var turn = 0;
function setup(){
	createCanvas(610,610);
	for(var i = 0; i < width; i += width / 3){
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
	var gridPosX; 
	var gridPosY;
	
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
		
	if(turn == 0){
		stroke(255,0,0);
		strokeWeight(5);
		cross(gridPosX, gridPosY, gridPosX + width / 3, gridPosY + width / 3);
		turn++;
	}else if(turn == 1){
		stroke(0);
		ellipse(gridPosX + (width / 3) / 2, gridPosY + (width / 3) / 2, (width / 3) - 10, (height / 3) - 10);
		turn--;
	}
}