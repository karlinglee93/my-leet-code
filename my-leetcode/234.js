/**
 * Easy
 * Failed
 *
 * head is cut, e.g. head === [1]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const dummyNode = new ListNode(-1, head);
    let cur = dummyNode;
    let prev = null;
    while (cur != null) {
        const temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    console.log(prev, head)
  
    while (prev && head) {
        console.log(head)
        if (prev.val !== head.val) return false;
        console.log(prev.next, head.next)
        prev = prev.next;
        head = head.next;
    }
    return true;
};

// test
console.log(isPalindrome([1,2,2,1]))
