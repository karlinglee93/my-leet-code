/**
 * Reference - optimise stack with dummy node
 * 97%
 * 90%
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
    const dummyNode = new ListNode(0, head);
    let temp = dummyNode;

    while (head != null) {
        stack.push(head);
        head = head.next;
    }

    let count = stack.length;
    while (count > 0) {
        temp.next = stack.pop();
        temp = temp.next;
        count--;
    }

    temp.next = null;

    return dummyNode.next;
};