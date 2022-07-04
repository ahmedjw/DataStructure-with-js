function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let sumList = new ListNode();
  let current = sumList;
  let cur1 = l1;
  let cur2 = l2;
  let carry = 0;
  let sum = 0;
  while (cur1 !== null || cur2 !== null) {
    sum = (cur1 ? cur1.val : 0) + (cur2 ? cur2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    cur1 = cur1 ? cur1.next : null;
    cur2 = cur2 ? cur2.next : null;
  }
  if (carry) current.next = new ListNode(carry);
  sumList = sumList.next;
  return sumList;
};
