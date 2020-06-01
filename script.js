document.getElementById("generate-board").onclick = function () {
  generateBoard();
};

function generateBoard() {
  var arr = [];
  while (arr.length < 25) {
    var r = Math.floor(Math.random() * 75) + 1;
    if (arr.includes(r)) {
    } else {
      arr.push(r);
    }
  }

  let counter = 0;

  var divs = document.getElementsByClassName("num");
  for (var i = 0; i < divs.length; i++) {
    divs[i].innerHTML = arr[counter];
    counter += 1;
  }
}

document.getElementById("clear-board").onclick = function () {
  clearBoard();
};

function clearBoard() {
  var divs = document.getElementsByClassName("num");
  for (var i = 0; i < divs.length; i++) {
    divs[i].innerHTML = "";
  }
}
