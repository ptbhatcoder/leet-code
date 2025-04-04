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
 * @return {TreeNode}
 */
const maxDepth = d = (n) => n ? 1 + Math.max(d(n.left), d(n.right)) : 0;

const lcaDeepestLeaves = (root) => {
    const [depthLeft, depthRight] = [maxDepth(root.left), maxDepth(root.right)];
    if (depthLeft === depthRight) {
        return root;
    }
    return lcaDeepestLeaves(depthLeft > depthRight ? root.left : root.right);
};