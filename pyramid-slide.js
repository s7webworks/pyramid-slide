

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");
var brickElem = document.getElementById("brick");

// handler function for adjusting the height slider
function heightslider(val) {
    //show the selected height on the slider
    document.getElementById("showheight").innerHTML = val;
    //retrieve the height and symbol
    bricksymbol = brickElem.value;
    heightStr = heightElem.value;
    height = parseInt(heightStr);
    //draw pyramid with these parameters
    drawPyramid(height,bricksymbol);
}

// handler function for changing the brick symbol in the dropdown
function symboldropdown(option) {
    //retrieve the height and symbol
    bricksymbol = brickElem.value;
    heightStr = heightElem.value;
    height = parseInt(heightStr);
    //draw pyramid with these parameters
    drawPyramid(height,bricksymbol);
}
function changeColor() {
    //<--------------------------------------------------------------------------------------------------[ Make let iables to get the values from the sliders ]
    let  rd = parseInt(document.getElementById('red').value);
    let  gn = parseInt(document.getElementById('green').value);
    let  bl = parseInt(document.getElementById('blue').value);
   //<---------------------------------------------------------------------------------------------------[ Convert the decimal to hex ] 
    let  rdhex = ( rd < 16 ) ? "0" + rd.toString(16) : rd.toString(16);
    let  gnhex = ( gn < 16 ) ? "0" + gn.toString(16) : gn.toString(16);
    let  blhex = ( bl < 16 ) ? "0" + bl.toString(16) : bl.toString(16);

   //create let iable to concatenates all the hex values

   let  hexcode = "#" + rdhex + gnhex + blhex;

   //change the color

   document.body.style.color = hexcode;
   document.getElementById('hexdisplay').innerHTML = hexcode;
} // eof changeColor
/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height,bricksymbol) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += bricksymbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
