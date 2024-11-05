/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let j = mat.length - 1;
    let ans = 0;
    for (let i = 0; i < mat.length; i++) {
      ans +=mat[i][i];
      if(i != j) ans+=mat[i][j];
      j--;
    }
    return ans;
  };