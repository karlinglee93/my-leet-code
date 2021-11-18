/**
 * Easy
 * Reference
 * 80%
 * 52%
 *
 * transform listnode to array
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
    const arr = [];
    while (head != null) {
        arr.push(head.val);
        head = head.next;
    }
    
    const len = arr.length;
    for (let i = 0, j = len - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) return false;
    }
    
    return true;
};

// test
console.log(isPalindrome([1,2,2,1]))
