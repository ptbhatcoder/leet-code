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
    const st = [];
    let cur = 0, level = 0, prev = null;
    const pushToStack = () => {
        const node = new TreeNode(cur);
        while(st.length > level) st.pop();
        const parent = st.at(-1);
        if(parent){
            if(parent.left) parent.right = node;
            else parent.left = node;
        }
        st.push(node);
        level = 0;
    }
    for(const c of traversal){
        if(c === '-'){
            if(prev !== c) pushToStack();
            level++;
            cur = 0;
        } else {
            cur = cur * 10 + Number(c);
        }
        prev = c;
    }
    pushToStack();
    while(st.length > 1) st.pop();
    return st.at(-1);
};