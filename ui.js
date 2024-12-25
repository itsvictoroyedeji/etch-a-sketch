
const mainContainer = document.querySelector(".container");
const boxContainer = document.createElement("div");
boxContainer.classList.add("boxes");

// Create a 16x16 box set
for (let i = 0 ; i < 256 ; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  
  boxContainer.appendChild(box);
}

mainContainer.appendChild(boxContainer);

const allBoxes = document.getElementsByClassName("box");

// Get window's size width
getWindowWidth();
window.addEventListener("resize", getWindowWidth);

function getWindowWidth() {
  let width = document.documentElement.clientWidth;

  // Prevents box's height size from being longer than box's width size in smaller screens
  if (width < 769) {
    // Set box container height as same as the viewport's width 
    boxContainer.style.height = `${width}px`;
  } else {
    boxContainer.style.height = "";
  }
} 


// feat: Hover Effect on Boxes
boxHoverEffect();

function boxHoverEffect() {
  //get all boxes
  Array.from(allBoxes).forEach((box) => {
    box.addEventListener("mouseenter", fillBox);
    
    function fillBox(e) {
      // console.log(e);
      e.target.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
    }

    function randomColor(num) {
      return Math.floor(Math.random() * num + 1);
    }
  })
}

// feat: Add button prompt to replace grid with custom number of squares per side

const button = document.createElement("button");
const buttonText = "Create New Grid";
button.classList.add("button");

button.appendChild(document.createTextNode(buttonText));

// Insert button before boxes
mainContainer.insertBefore(button, boxContainer);

button.addEventListener("click", createNewGrid);

function createNewGrid() {
  let value = prompt("How many squares per side do you want?", 10);

  if (value === null) {
    return false;
  } else if (value >= 2 && value <= 100) {
    // delete all current box divs
    Array.from(allBoxes).forEach((box) => {
      box.remove()
    })

    // Square the value to calculate total boxes needed
    let boxesToCreate = Math.pow(value, 2);

    // Add new box depending on value submitted
    for (let i = 0 ; i < boxesToCreate ; i++) {
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      //new box width and height divided by value inputted (to ensure equal box sizes)
      newBox.style.width = `calc(100% / ${value})`;
      newBox.style.height = `calc(100% / ${value})`;
      boxContainer.appendChild(newBox);
    } 
  } else {
    alert("Value must be a number between 2 and 100");
    createNewGrid();
  }
  
  // reactivates hover effect after new grid creation
  boxHoverEffect();
}


