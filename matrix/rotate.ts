function rotateMatrix(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0,
    col = 0;
  let prev, curr;

  /*
    row - Starting row index
    m - ending row index
    col - starting column index
    n - ending column index
    */

  while (row < m && col < n) {
    if (row + 1 === m || col + 1 === n) break;

    // Store the first element of the next row, this
    // element will replace the first element of the current row
    prev = matrix[row + 1][col];

    // Move elements of the first row from the remaining rows
    for (let i = col; i < n; i++) {
      curr = matrix[row][i];
      matrix[row][i] = prev;
      prev = curr;
    }
    row++;

    // Move elements of the last column from the remaining columns
    for (let i = row; i < m; i++) {
      curr = matrix[i][n - 1];
      matrix[i][n - 1] = prev;
      prev = curr;
    }
    n--;

    // Move elements of the last row from the remaining rows
    if (row < m) {
      for (let i = n - 1; i >= col; i--) {
        curr = matrix[m - 1][i];
        matrix[m - 1][i] = prev;
        prev = curr;
      }
    }
    m--;

    // Move elements of the first column from the remaining rows
    if (col < n) {
      for (let i = m - 1; i >= row; i--) {
        curr = matrix[i][col];
        matrix[i][col] = prev;
        prev = curr;
      }
    }
    col++;
  }
}
