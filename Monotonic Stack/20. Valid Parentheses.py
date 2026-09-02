# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
 

# Example 1:

# Input: s = "()"

# Output: true

# Example 2:

# Input: s = "()[]{}"

# Output: true

# Example 3:

# Input: s = "(]"

# Output: false

# Example 4:

# Input: s = "([])"

# Output: true

# Example 5:

# Input: s = "([)]"

# Output: false



# Input : "(([[]]))"
# Input : "]"
# Input : "{[]}("

# Optimal Approach:
# Loop through all the characters in input s
# Make a math dictionary to check bracket match and Make a storage_stack array to store brackets
# If the bracket is an opening bracket, store the bracket into storage_stack
# else(if the bracket is a closing bracket),
    # if storage_stack is empty, return immediately, therer is nothing to check match
    # Else(storage_stack is not emtpy), pop the last element for the storage_stack
    # if current character(closing bracket) does not match with popped_element, return false
# when the loops ends
    #if nothing left in storage_stack, return true
    #else(something left), return false
# Time complexity: O(n) - As we are iterating through the string once.
# Space complexity: O(n) - As we are using a stack to store the opening brackets

# input s = "([])" => output = true

class Solution:
    def isValid(self, s: str) -> bool:

        # Making a dictionary to check bracket match and empty storageStack array
        storage_stack = []
        # Opening Braket : Closing Braket
        match_dictionary = { 
            "(" : ")", 
            "{" : "}", 
            "[" : "]" 
            }
        # Loop through the character in input s
        for char in s:
            # if char is an opening bracket, stack the character into storage_stack
            if char in match_dictionary:
                storage_stack.append(char)
            # when if char is a closing bracket, and if storage_stack is empty and return false
            if char not in match_dictionary:
                if not storage_stack:
                    return False
            # when if char is a closing bracket, and if storage_stack is not empty, pop the last element of storage_stack
                else:
                    popped_element = storage_stack.pop()
            # if the popped element is does not math with the current character, return false
                if char != match_dictionary[popped_element]:
                    return False
        # If nothing is left in storage_stack, return True. Else, return false        
        if not storage_stack:
                return True
        else:
            return False
        



    def isValid2(self, s: str) -> bool:
        storage_stack = []
        # Map opening brackets to their corresponding closing brackets
        match_dictionary = { 
            "(" : ")", 
            "{" : "}", 
            "[" : "]" 
        }

        # Loop through each character in the input string s
        for char in s:
            # If the character is an opening bracket, push it into storage_stack
            if char in match_dictionary:
                storage_stack.append(char)
            # If the character is a closing bracket
            else:
                # If storage_stack is empty, there is no matching opening bracket
                if not storage_stack:
                    return False
                
                # Pop the last element and check if it matches the current closing bracket
                popped_element = storage_stack.pop()
                if char != match_dictionary[popped_element]:
                    return False
                
        # If storage_stack is completely empty, return True. Otherwise, return False
        return not storage_stack


            



      

        