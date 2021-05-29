
//List of clolr
var colors = generateRandoColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


resetButton.addEventListener("click", function()
{
    //generate akk bew colors
    colors = generateRandoColors(6);

    //pick a new random color from array
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    //change colors of the squares
    for (var i = 0 ; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    messageDisplay.style.color = "white";
});

colorDisplay.textContent = pickedColor;

for (var i = 0 ; i < squares.length; i++)
{
    // Add initial colors to square
    squares[i].style.backgroundColor = colors[i]


    // add click listeners to squares
    squares[i].addEventListener("click", function()
    {
        //grap color of the clocked square
        var clickedColor = this.style.backgroundColor;

        //compare color to picked color
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again!"
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
        }
        else
        {
            //gray out the wrong clicked one
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
}

// Change all square colors after correct guess
function changeColors(color)
{
    //Loop through all squares
    for(var i = 0; i < squares.length ; i++)
    {
        //Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

//Pick random number and map it to colors arr
function pickColor()
{
    var randomN = Math.floor(Math.random() * colors.length);
    return colors[randomN];
}

function generateRandoColors(num)
{
    //Make an  array
    var arr = [];

    //repeat num times
    for(var i = 0 ; i < num ; i++)
    {
        //get rando color and push into arr
        arr.push(randoColor());
    }

    //return that array
    return arr;
}

function randoColor()
{
    //Pick a "red" between 0 - 255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" between 0 - 255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" between 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}