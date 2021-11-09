/**
 * Midle
 * Reference
 * 75%
 * 54%
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
    const stack = new Array();
    let current = dummyNode;
    while (current) {
        stack.push(current);
        current = current.next;
    }
    
    // 出栈顺序与n 值一致
    while (n) {
        stack.pop();
        n--;
    }
    
    let peekNode = stack[stack.length - 1];
    peekNode.next = peekNode.next.next;
    return dummyNode.next;
};

/**
 * Dummy Node 中引入栈思想
 */
 
 // test
console.log(removeNthFromEnd([1,2,3,4,5], 2));