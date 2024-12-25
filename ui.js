
const container = document.querySelector(".container");
const boxes = document.createElement("div");
boxes.classList.add("boxes");

// Get window's size width
getWindowWidth();
window.addEventListener("resize", getWindowWidth);

function getWindowWidth() {
  let width = document.documentElement.clientWidth;

  // Prevents box's height size from being longer than box's width size in smaller screens
  if (width < 769) {
    // Set box container height as same as the viewport's width 
    boxes.style.height = `${width}px`;
  } else {
    boxes.style.height = "";
  }
}

// Create a 16x16 box set
for (let i = 0 ; i < 256 ; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  
  boxes.appendChild(box);
} 

container.appendChild(boxes);

// feat: Hover Effect on Boxes
// get all boxes
const allBoxes = document.getElementsByClassName("box");

Array.from(allBoxes).forEach((box) => {
  box.addEventListener("mouseenter", fillBox);
  
  function fillBox(e) {
    // console.log(e);
    e.target.classList.add("fill");
  }
})
