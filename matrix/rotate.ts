function rotateMatrix(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let col = 0;
  let row = 0;
  let prev, curr;

  while (row < m && col < n) {
    if (row + 1 === m || col + 1 === n) break;
    prev = matrix[row + 1][col];
    for (let i = col; i < n; i++) {
      curr = matrix[row][i];
      matrix[row][i] = prev;
      prev = curr;
    }
    row++;
    for (let i = row; i < m; i++) {
      curr = matrix[i][n - 1];
      matrix[i][n - 1] = prev;
      prev = curr;
    }
    n--;
    if (row < m) {
      for (let i = n - 1; i >= col; i--) {
        curr = matrix[m - 1][i];
        matrix[m - 1][i] = prev;
        prev = curr;
      }
    }
    m--;
    if (col < n) {
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
}
