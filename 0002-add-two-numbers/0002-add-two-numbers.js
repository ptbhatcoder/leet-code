/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(-1);
    for(let p1 = l1, p2 = l2, c = 0, p = dummy; p1 || p2 || c; p1  = p1?.next, p2 = p2?.next, p = p.next){
        let s = (p1?.val || 0) + (p2?.val || 0) + c;
        [s, c] = s > 9 ? [s - 10, 1] : [s, 0];
        p.next = new ListNode(s);
    }
    return dummy.next;
};