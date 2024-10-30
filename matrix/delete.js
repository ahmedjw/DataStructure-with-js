/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let arr = grid.map((item) => {
    return [];
  });
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => a - b);
    let max = 0;
    while (grid[i].length > 0) {
      console.log(grid[i]);
      max = grid[i][grid[i].length - 1];
      
      grid[i].pop();
    }
    console.log(arr, "arr");
  }
  for (let i = 0; i < arr.length; i++) {
    ans += Math.max(...arr[i]);
  }
  console.log(ans);
  return ans;
};
const matrix = [
  [1, 2, 4],
  [3, 3, 1],
];
deleteGreatestValue(matrix);
