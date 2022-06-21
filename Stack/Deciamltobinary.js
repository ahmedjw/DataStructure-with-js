function dtb(number) {
  let NumbersStack = [];
  let nextnum = number;
  do {
    NumbersStack.unshift(nextnum % 2);
    nextnum = Math.floor(nextnum / 2);
  } while (nextnum !== 0);
  return Number(NumbersStack.join(""));
}
