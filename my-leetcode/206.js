/**
 * Easy
 * Pass
 * 78%
 * 89%
 * 
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
var reverseList = function(head) {
    if (head == null) return head;

    const stack = new Array();   
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    let count = stack.length;
    const res = stack[count - 1];
	// 后进先出栈思想
    while (count > 0) {
        current = stack.pop();
        current.next = stack[stack.length - 1] ? stack[stack.length - 1] : null;
        count--;
    }

    return res;
};