/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

//change our current node to next node and set next node.value = node.next.val

const deleteNode = function (node) {
  //4-5-1-9 given node = 5
  //have a reference to next node
  let next = node.next.next; //9
  //set current node.val as next node.val
  node.val = node.next.val; //1
  //set node.next and node.next.next
  node.next = next; //9
  //4-1-9
};
