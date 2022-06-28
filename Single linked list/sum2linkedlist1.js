function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var sum2linkedList = function (l1, l2) {
  let l1arr = [],
    l2arr = [],
    sumArr = [];
  while (l1 != null) {
    let current = l1.next;
    l1arr.push(l1.val);
    l1 = current;
  }
  while (l2 != null) {
    let current = l2.next;
    l2arr.push(l2.val);
    l2 = current;
  }
  let sum = BigInt(l1arr.join("")) + BigInt(l2arr.join(""));
  sumArr = sum.toString().split("").reverse();
  let linkedList = null;
  for (let i in sumArr) {
    linkedList = {
      val: sumArr[i],
      next: linkedList,
    };
  }
  return linkedList;
};
