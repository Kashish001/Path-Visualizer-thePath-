
var totalRows = 40;
var totalCols = 62;
var speed = "Fast";
var algorithmChoosed;
var createWalls = false;
var startCell = [0, 61];
var endCell = [39, 0];
var inProgress = false;
var finished = false;



function createMaze(rows, cols) {
    var maze = "<table>";
    for(row = 1; row <= rows; row++) {
        maze += "<tr>"
        for(col = 1; col <= cols; col++) {
            maze += "<td></td>"
        }
        maze += "</tr>";
    }
    maze += "</table>";
    return maze;
}

var myMaze = createMaze(totalRows, totalCols);
$("#tableContainer").append(myMaze);

//Nav Bar Backend

$("#mazes .dropdown-item").click(function() {

});

$("#speed .dropdown-item").click(function() {
    speed = $(this).text();
    updateDisplayedSpeed();
});

$("#algorithm .dropdown-item").click(function() {
    algorithmChoosed = $(this).text();
    updateAlgo();
});

$("td").click(function() {
    var index = $("td").index(this);
    var startIndex = (startCell[0] * (totalCols)) + startCell[1];
    var endIndex = (endCell[0] * (totalCols)) + endCell[1];
    if(!inProgress && !(index == startIndex) && !(index == endIndex)) {
        if(finished) {
            clearMaze(keepWalls = true);
            finished = false;
        }
        $(this).toggleClass("wall");
    }
});

$("#clearBtn").click(function() {
    if (inProgress){ return; }
	clearMaze(keepWalls = false);
});

$("td").mouseup(function() {

});



//Functions

function updateDisplayedSpeed() {
    if(speed == "Fast") $(".displayedSpeed").text("Visualization Speed: Fast");
    else if(speed == "Slow") $(".displayedSpeed").text("Visualization Speed: Slow");
    else if(speed == "Normal") $(".displayedSpeed").text("Visualization Speed: Normal");
    return ;
}


function updateAlgo() {
    if(algorithmChoosed == "BFS (Breadth First Search)") $(".algo").text("Algorithm: BFS (Breadth First Search)");
    else if(algorithmChoosed == "DFS (Depth First Search)") $(".algo").text("Algorithm: DFS (Depth First Search)");
    return ;
}

function clearMaze( keepWalls ){
	var cells = $("#tableContainer").find("td");
	var startCellIndex = (startCell[0] * (totalCols)) + startCell[1];
	var endCellIndex = (endCell[0] * (totalCols)) + endCell[1];
	for (var i = 0; i < cells.length; i++){
			isWall = $( cells[i] ).hasClass("wall");
			$( cells[i] ).removeClass();
			if (i == startCellIndex){
				$(cells[i]).addClass("start"); 
			} else if (i == endCellIndex){
				$(cells[i]).addClass("end"); 
			} else if ( keepWalls && isWall ){ 
				$(cells[i]).addClass("wall"); 
			}
	}
}


//Mouse Events




clearMaze();