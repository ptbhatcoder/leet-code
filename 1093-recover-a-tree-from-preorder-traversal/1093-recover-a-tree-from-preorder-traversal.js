/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    const l = traversal.length;
    const map = new Map;
    const preorder = (pos, dashes, depth) => {
        if(pos >= l) return [null, pos];
        if(traversal[pos] === '-') return preorder(pos + 1, dashes + 1, depth);
        if(!map.has(pos)) map.set(pos, dashes);
        if(depth !== map.get(pos)) return [null, pos];
        let cur = 0;
        while(pos < l && traversal[pos] !== '-'){
            cur = cur * 10  + Number(traversal[pos]);
            pos++;
        }
        const node = new TreeNode(cur);
        [node.left, pos] = preorder(pos, 0, depth + 1);
        [node.right, pos] = preorder(pos, 0, depth + 1);
        return [node, pos];
    }
    return preorder(0, 0, 0)[0];
};