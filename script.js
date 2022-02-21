const container = document.querySelector(".container")
for (let i = 0;i<256;i++){
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("grid");
    
}
let squares = container.querySelectorAll(".grid");
   squares.forEach((grid) => {
   squares.addEventListener(("mouseenter"), () => {
   squares.style.color = "grey";
   console.log("mouseenter")
}) 

})


