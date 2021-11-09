/**
 * Midle
 * Reference
 * 54%
 * 7%
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
 const dummyNode = new ListNode(0, head);
 
 let count = 0;
 let current = dummyNode;
 while (current) {
   count++;
   current = current.next;
 }
 
 current = dummyNode;
 for (let i = 0; i < count - n - 1; i++) {
   current = current.next;
 }
 
 current.next = current.next.next;
 return dummyNode.next;
};

/**
 * Dummy Node 可以避免前面发生的current.next.next 的错误
 */
 
 // test
console.log(removeNthFromEnd([1,2,3,4,5], 2));