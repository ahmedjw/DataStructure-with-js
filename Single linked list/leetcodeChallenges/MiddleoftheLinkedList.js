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
var middleNode = function (head) {
  let current = head;
  let length = getLength(head);
  let pointer = 0;
  while (pointer !== Math.floor(length / 2)) {
    pointer++;
    current = current.next;
  }
  return current;
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

/*Given the head of a singly linked list,
 return the middle node of the linked list.
If there are two middle nodes, return the second middle node.*/
