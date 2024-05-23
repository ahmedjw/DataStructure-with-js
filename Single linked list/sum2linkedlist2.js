function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let linkedList = null;
  carry = 0;
  while (l1 != undefined || l2 != undefined) {
    linkedList = {
      val:
        l2 === undefined
          ? l1 + carry
          : l1 === undefined
          ? l2 + carry
          : l2.val + l1.val >= 10
          ? 0
          : l2.val + l1.val + carry,
      next: linkedList,
    };
    linkedList.val === 0 ? carry++ : "";
    l1 = l1.next;
    l2 = l2.next;
  }

  return linkedList;
};
Array.reverce