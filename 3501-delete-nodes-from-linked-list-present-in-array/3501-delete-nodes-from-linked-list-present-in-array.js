/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const lookup = new Set(nums);
    const dummy = new ListNode(-1, head);
    let ptr = dummy;
    while(ptr.next){
        const check = ptr.next;
        if(lookup.has(check.val)){
            ptr.next = check.next;
            check.next = null;
        } else ptr = ptr.next;
    }
    return dummy.next;
};