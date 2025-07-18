/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let val = 0;
    let ptr = head;
    while(ptr){
        val <<= 1;
        val |= ptr.val;
        ptr = ptr.next;
    }
    return val;
};