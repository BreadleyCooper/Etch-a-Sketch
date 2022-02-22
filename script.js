let gridSize = 16  //Sets the default grid to 16.
const container = document.querySelector(".container")
makeGrid() //Draws initial default grid

function makeGrid (){
for (let i = 0;i<(gridSize*gridSize);i++){
    let minWidth = 500 / gridSize 
    let maxWidth = 500 / gridSize 
    const grid = document.createElement("div"); //creates a number of elements based on gridSize
    container.appendChild(grid); //appends the grid to the DOM
    grid.classList.add("grid"); //Add CSS class
    grid.setAttribute("id","cells")
    grid.style.minWidth = minWidth + "px"; //Sets the min and max width depending on the gridSize *Currently not working*
    grid.style.maxWidth = maxWidth + "px"
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "grey" //Changes the grids to grey when moused over
    }) 
}}
//reset button causes a prompt 
const reset = document.querySelector("#reset");
    reset.addEventListener("click", () => {   
        while (container.firstChild) {
            container.removeChild(container.lastChild) //loops through and removes the containers children(the grid) to stop just adding more to the previous grid
        }
        resetPrompt()
    }); 

// function for resetting the grid upon clicking reset button
function resetPrompt (){
    gridSize = prompt("Please choose a number between 1 and 100 to reset the grid")
    if (gridSize === null){
        return;
    }else if ((gridSize > 100) || gridSize < 1){
        resetPrompt()
    } else {
        makeGrid()
        console.log(minWidth)
        return gridSize; 
        

    }
}

// Issues: Resetting the grid is adding more to the grid - need to reset back to 16*16.