/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let current = head;
  let next = null;
  while (current.next) {
    let gcdValue = gcd(current.val, current.next.val);
    next = current.next;
    current.next = new ListNode(gcdValue, next);
    current = current.next.next;
  }
  return head;
};
function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
