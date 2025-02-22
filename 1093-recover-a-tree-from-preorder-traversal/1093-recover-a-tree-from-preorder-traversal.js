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
    let cur = 0, level = 0;
    const n = traversal.length;
    const st = [];
    for(let i = 0; i < n; i++){
        const c = traversal[i];
        if(c === '-'){
            cur = 0;
            level++;
            continue;
        }
        cur = cur * 10 + Number(c);
        if(i === n - 1 || traversal[i + 1] === '-'){
            const node = new TreeNode(cur);
            while(st.length > level) st.pop();
            if(st.length > 0){
                const parent = st.at(-1);
                if(parent.left) parent.right = node;
                else parent.left = node;
            }
            level = 0;
            st.push(node);
        }
    }
    return st[0];
};