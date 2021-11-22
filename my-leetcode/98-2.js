/**
 * 验证二叉搜索树
 * Easy
 * Reference - Recursion
 * 61%
 * 45%
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
    return helper(root, -Infinity, Infinity);
}

const helper = (node.val, lower, upper) => {
    if (node == null) return true;
    if (node.val <= lower || node.val >= upper) {
        return false;
    }
    
    return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);
}