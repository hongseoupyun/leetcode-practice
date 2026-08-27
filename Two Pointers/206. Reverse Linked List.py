"""
Given the head of a singly linked list, reverse the list, and return the reversed list.


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

"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
#     current

#  1 -> 2 -> 3 -> null
# null <- 1 <- 2 <- 3


# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Make a prev_node to store the new end null and set current pointer to the head
        prev_node = None
        current_node = head

        # Loops through entire linked list until it gets to the end null
        while current_node != None:
            # Store next node in temp to prevent loss
            temp = current_node.next
            # Reverse current node's direction by setting prev node as currnet_node.next 
            current_node.next = prev_node 
            # Moving the prev node pointer one step to the right
            prev_node = current_node
            # Moving the current node pointer to right by setting next node(temp) as a current node
            current_node = temp


        return prev_node








        