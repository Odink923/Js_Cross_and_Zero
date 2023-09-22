var canvas = document.getElementById("Canvas1");
var ctx = canvas.getContext("2d");
var gridSize = 200;
var turn = true;
var win = false;
var grid=[];
for (var i = 0; i<3; i++){
    grid[i] = [];
    for (var j = 0; j<3;j++){
        grid[i][j]=0;
    }
}


function drawGrid() {
    for (var x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }

    for (var y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }


    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.stroke();
}
function theEnd(){
    var k=0;
    var countX = 0;
    var countXver=0;
    var countO =0;
    var countOver =0;
    for(var i = 0; i<3; i++){
        for(var j =0; j<3; j++){
            if(grid[i][j]==0){
                k++;
            }else if(grid[i][j]=="X"){
                countX++;
                if(countX==3){
                    alert("X win!");
                    win =true;

                }
            }
            if(grid[j][i]=="X"){
                countXver++;
                if (countXver==3){
                    alert("X win!")
                    win = true;
                }
            }
            if(grid[j][i]=="O"){
                countO++;
                if (countO==3){
                    alert("O win!")
                    win = true;
                }
            }
            if(grid[j][i]=="O"){
                countOver++;
                if (countOver==3){
                    alert("O win!")
                    win = true;
                }
            }

        }
        countX =0;
        countXver =0;
        countO =0;
        countOver =0;
    }
    if(k==0||win==true){
        alert("the end")
    }else {
        k=0;
    }
}


drawGrid();
canvas.addEventListener("mousedown", function (event){
   var mouseX = event.clientX - canvas.getBoundingClientRect().left;
   var mouseY = event.clientY - canvas.getBoundingClientRect().top;

    var mouseHtml = document.getElementById("mouseHtml");
    mouseHtml.innerText = mouseX + " : " + mouseY;
   var lx = Math.floor(mouseX /200);
   var ly =Math.floor(mouseY /200);

       var cellSize = gridSize;
       var x = lx * cellSize;
       var y = ly * cellSize;


        if(win!=true) {
            if (turn == true && grid[lx][ly] != "O") {
                ctx.strokeStyle = "red";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + cellSize, y + cellSize);
                ctx.moveTo(x, y + cellSize);
                ctx.lineTo(x + cellSize, y);
                ctx.stroke();
                turn = false;
                grid[lx][ly] = "X"


            } else if (turn == false && grid[lx][ly] != "X") {
                ctx.strokeStyle = "purple";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2 - 1, 0, Math.PI * 2);
                ctx.stroke();
                turn = true;
                grid[lx][ly] = "O"
            } else {
                alert("Так не можна зробіть інший хід")
            }

            theEnd()
            console.log(grid);
        }


});



