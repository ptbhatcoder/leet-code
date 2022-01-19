/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return head;
    let hare = head, tortoise = head;
    
    do {
        hare = hare.next;
        if(!hare){
            return null;
        }
        tortoise = tortoise.next;
        hare = hare.next;
    } while(hare && tortoise && hare !== tortoise);
    
    if(!hare || !tortoise) return null;
    
    hare = head;
    while(hare !== tortoise){
        hare = hare.next;
        tortoise = tortoise.next;
    }
    
    return tortoise;
    
};