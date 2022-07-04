/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = getLength(head);

  let current = head;
  let counter = 0;
  if (length === 1 && n === 1) return null;
  if (length === n) return head.next;
  else {
    let length = getLength(head) - n - 1;
    while (counter < length) {
      counter++;
      current = current.next;
    }
    current.next = current.next.next;
    return head;
  }
};
function getLength(head) {
  let current = head;
  let length = 0;
  while (current != null) {
    length++;
    current = current.next;
  }
  return length;
}
/*Given the head of a linked list, remove the nth node from the end of the list and return its head.*/
