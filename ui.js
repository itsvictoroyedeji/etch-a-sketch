
const container = document.querySelector(".container");

const boxes = document.createElement("div");
boxes.classList.add("boxes");

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

