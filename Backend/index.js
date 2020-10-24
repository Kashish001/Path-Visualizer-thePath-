
var totalRows = 40;
var totalCols = 62;

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