/**
 * Midle
 * Reference
 * 96%
 * 77%
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
    let fast = dummyNode;
    let slow = dummyNode;

    while (n) {
        fast = fast.next;
        n--;
    }
    
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    
    return dummyNode.next;
};

/**
 * 双指针思想
 */
 
 // test
console.log(removeNthFromEnd([1,2,3,4,5], 2));