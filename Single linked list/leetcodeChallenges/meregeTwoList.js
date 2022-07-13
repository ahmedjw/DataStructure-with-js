/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let meregedList = new ListNode();
  let current = meregedList;
  let cur1 = list1;
  let cur2 = list2;
  while (cur1 !== null || cur2 !== null) {
    if (cur1.val > cur2.val) {
      let Node = new ListNode(cur1.val, new ListNode(cur2.val));
      current.next = Node;
      Node.next = current;
    } else if (cur1.val <= cur2.val) {
      let Node = new ListNode(cur2.val, new ListNode(cur1.val));
      current.next = Node;
      Node.next = current;
    }
    cur1 = cur1.next;
    cur2 = cur2.next;
    current.next = new ListNode();
  }
  return meregedList;
};
