/**
 * Midle
 * Not Pass
 *
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

var removeNthFromEnd = function(head, n) {
  let current = head;
  let count = 0;
  
  while (current) {
    count++;
    current = current.next;
  }
 
  // let previous;
  current = head;
  for (let i = 0; i < count - n - 1 && current != null; i++) {
    // previous = current;
    current = current.next;
  }
  
  // Reason: previous.next or current.next.next may not exist
  current = current.next.next;
  return head;
};

/**
 * 进阶：一趟扫描
 * tips: 
 * 1. 要搞懂return 的是什么？
 * 2. 了解dummy node
 */
 
 // test
console.log(removeNthFromEnd([1,2,3,4,5], 2));