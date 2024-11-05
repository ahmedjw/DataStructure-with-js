/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid.length - 1; j++) {
      let tl = grid[i][j];
      let tr = grid[i + 1][j];
      let bl = grid[i][j + 1];
      let br = grid[i + 1][j + 1];
      if (tr === "W" && bl === "W" && br === "W") return true;
      if (tr === "W" && bl === "W" && tl === "W") return true;
      if (br === "W" && bl === "W" && tl === "W") return true;
      if (br === "W" && tr === "W" && tl === "W") return true;
    }
  }
  return false;
};
let grid = [
  ["B", "W", "B"],
  ["W", "B", "W"],
  ["B", "W", "B"],
];

canMakeSquare(grid);
