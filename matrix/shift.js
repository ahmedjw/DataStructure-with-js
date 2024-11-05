var shiftGrid = function (grid, k) {
  let end = grid.length - 1;
  while (k > 0) {
    grid[0].unshift(grid[end].pop());
    for (let i = 1; i < grid.length; i++) {
      grid[i].unshift(grid[i - 1].pop());
    }
    k--;
  }
  return grid;
};
let grid = [
  [3, 8, 1, 9],
  [19, 7, 2, 5],
  [4, 6, 11, 10],
  [12, 0, 21, 13],
];
shiftGrid(grid, 4);
