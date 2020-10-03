window.onload = event => {
  const chessBoard = document.querySelector(".chess-board");

  chessBoardInit();
  chessBoardSizeUpdate();

  window.onresize = () => {
    chessBoardSizeUpdate();
  };

  const chessCells = document.querySelectorAll(".chess-cell");

  for (const chessCell of chessCells) {
    chessCell.onclick = function() {
      clearSelection();
      clearHighlight();
      selectCell(this.dataset.index);
      showKnightMoves(this.dataset.index);
    };
  }

  function chessBoardInit() {
    console.log(123);
    for (let i = 0; i < 64; i++) {
      const chessCell = document.createElement("div");
      chessCell.dataset.index = i;
      chessCell.classList.add(
        "chess-cell",
        isBlackChessCell(i) ? "black" : "white"
      );
      chessBoard.append(chessCell);
    }
  }

  function chessBoardSizeUpdate() {
    const bodyPadding = cutPx(getComputedStyle(document.body).padding);
    const bodyWidth = cutPx(getComputedStyle(document.body).width);
    const bodyHeight = cutPx(getComputedStyle(document.body).height);

    const newSize = Math.min(bodyWidth, bodyHeight) - bodyPadding * 2;
    chessBoard.style.width = newSize + "px";
    chessBoard.style.height = newSize + "px";
  }

  function clearSelection() {
    const selection = document.querySelector(".select");
    if (selection) {
      selection.classList.remove("select");
    }
  }

  function clearHighlight() {
    const highlightCells = document.querySelectorAll(".highlight");
    for (const highlightCell of highlightCells) {
      highlightCell.classList.remove("highlight");
    }
  }

  function selectCell(index) {
    document.querySelector(`[data-index="${index}"`).classList.add("select");
  }

  function showKnightMoves(index) {
    const knightX = getCellX(index);
    const knightY = getCellY(index);

    highlightCell(knightX + 2, knightY + 1);
    highlightCell(knightX + 2, knightY - 1);

    highlightCell(knightX - 2, knightY + 1);
    highlightCell(knightX - 2, knightY - 1);

    highlightCell(knightX + 1, knightY + 2);
    highlightCell(knightX + 1, knightY - 2);

    highlightCell(knightX - 1, knightY + 2);
    highlightCell(knightX - 1, knightY - 2);
  }
};

function cutPx(str) {
  return +str.substr(0, str.length - 2);
}

function isBlackChessCell(index) {
  return (
    (getCellY(index) % 2 && (index + 1) % 2) ||
    ((getCellY(index) + 1) % 2 && index % 2)
  );
}

function getCellX(index) {
  return index % 8;
}

function getCellY(index) {
  return Math.floor(index / 8);
}

function highlightCell(cellX, cellY) {
  if (onChessBoard(cellX, cellY)) {
    document
      .querySelector(`[data-index="${getCellIndex(cellX, cellY)}"`)
      .classList.add("highlight");
  }
}

function onChessBoard(cellX, cellY) {
  return inRange(cellX, 0, 7) && inRange(cellY, 0, 7);
}

function inRange(number, min, max) {
  return number >= min && number <= max;
}

function getCellIndex(cellX, cellY) {
  return cellY * 8 + cellX;
}
