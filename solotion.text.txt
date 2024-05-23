const productArray = (arr) => {
  //first soloution with o(n^2)
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result[i] = 1;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (i != j) result[i] *= arr[j];
  //     }
  //   }
  //   return result;

  //2nd soloution at the interview with  o(n)
  // let leftProduct = arr.map((x) => (x = 1));
  // let rightProduct = arr.map((x) => (x = 1));
  // for (let i = 1; i < arr.length; i++) {
  //   leftProduct[i] = leftProduct[i - 1] * arr[i - 1];
  // }

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   rightProduct[i] =
  //     (rightProduct[i + 1] == undefined ? 1 : rightProduct[i + 1]) *
  //     (arr[i + 1] == undefined ? 1 : arr[i + 1]);
  // }
  // for (let i in arr) {
  //   arr[i] = leftProduct[i] * rightProduct[i];
  // }
  // return arr;

  // last solotion with o(n)
  let product = arr.reduce((product, num) => (product *= num));
  let result = arr.map((num) => (num = product));
  for (let i in result) {
    result[i] = result[i] / arr[i];
  }
  return result;
};

let arr = [1, 2, 3, 4];
productArray(arr);
