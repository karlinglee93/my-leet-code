/**
 * 验证二叉搜索树
 * Easy
 * Reference - InOrderTraverse
 * 10%
 * 70%
 *
 * Comments: right thought, but did not resolve it
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const stack = [];
    let inOrder = -Infinity;
    
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop();
        if (root.val <= inOrder) {
            return false;
        }
        inOrder = root.val;
        
        root = root.right;
    }
    
    return true;
}