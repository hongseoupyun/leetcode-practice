// Given the head of a singly linked list, reverse the list, and return the reversed list.

/*
Brute Force Approach:
1. Create a new linked list to store the reversed elements.
2. Loop through the given linked list and add each element to the new linked list.
3. Finally, return the new linked list.

Time Complexity: O(n) - As we are iterating through the linked list once.
Space Complexity: O(n) - As we are using a new linked list to store the reversed elements.

Optimal Approach:
1. Use two pointers, one for iterating through the linked list and another for keeping track of the previous node.
2. Start with prev as null and curr as head.
3. Loop through the linked list until curr is not null.
4. Store the next node in a temporary variable.
5. Change the next pointer of curr to point to prev.
6. Move prev and curr one step forward.
7. Finally, return prev which will be the new head of the reversed linked list.

Time Complexity: O(n) - As we are iterating through the linked list once.
Space Complexity: O(1) - As we are not using any extra space.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 
 * 
 * 
 * 
 *     prev
        ↓
        [Null]    [ 1 ] ---> [ 2 ] ---> [ 3 ] ---> [Null]
                    ↑
                   curr
 */

function reverseList(head: ListNode | null): ListNode | null {
    // prev will point to the previous node, curr will point to the current node
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    
    while (curr !== null) {
        // Store the next node in a temporary variable
        const nextTemp: ListNode | null = curr.next;
        
        // Change the next pointer of curr to point to prev
        curr.next = prev;
        
        // Move prev and curr one step forward
        prev = curr;
        curr = nextTemp;
    }
    
    // Finally, return prev which will be the new head of the reversed linked list
    return prev;
}
