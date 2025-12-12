var gridContainer = document.querySelector("#grid-container");

for (var i = 0; i < 16 * 16; i++) {
  gridContainer.innerHTML += "<div class='grid-item'></div>";
}

var gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.background = "red";
  });
});
