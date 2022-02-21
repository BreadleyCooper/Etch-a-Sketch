const container = document.querySelector(".container")
for (let i = 0;i<256;i++){
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("grid");
}
let squares = document.querySelector(".grid");
squares.addEventListener(("mouseenter"), () => {
  event.target.style.color = "grey";
})


