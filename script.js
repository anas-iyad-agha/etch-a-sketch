var gridContainer = document.querySelector("#grid-container");

var rows = 16;
var columns = 16;

for (var i = 0; i < rows * columns; i++) {
  gridContainer.innerHTML += "<div class='grid-item'></div>";
}

var gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.background = "red";
  });
});

var changeDimensionsButton = document.querySelector(
  "#change-dimensions-button"
);

changeDimensionsButton.addEventListener("click", () => {
  var newRows;

  while (true) {
    newRows = prompt("enter rows (max is 100):");
    if (!isNaN(newRows) && Number(newRows) <= 100 && Number(newRows) > 0) {
      break;
    } else {
      alert("Please enter a valid number");
    }
  }

  var newColumns;

  while (true) {
    newColumns = prompt("enter columns (max is 100):");
    if (
      !isNaN(newColumns) &&
      Number(newColumns) <= 100 &&
      Number(newColumns) > 0
    ) {
      break;
    } else {
      alert("Please enter a valid number");
    }
  }

  rows = newRows;
  columns = newColumns;

  gridContainer.innerHTML = "";

  for (var i = 0; i < rows * columns; i++) {
    gridContainer.innerHTML += "<div class='grid-item'></div>";
  }

  var gridItems = document.querySelectorAll(".grid-item");

  width = (1 / columns) * 100;
  gridItems.forEach((item) => {
    item.style.width = `calc(${width}% - 2px)`;
    item.addEventListener("mouseover", () => {
      item.style.background = "red";
    });
  });
});
