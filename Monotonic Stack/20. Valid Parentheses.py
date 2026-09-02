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


# Optimal Approach:
# 1. Loop through each character of input string s.
# 2. Make a dictionary/object to check bracket match, and make an empty storageStack.
# 3. If the character is an OPENING bracket, push (append) that character into storageStack.
# 4. If the character is a CLOSING bracket:
#    - If storageStack is empty, return false immediately.
#    - Else, pop the last element from storageStack.
#    - If this popped element does not match the current closing bracket, return false.
# 5. When the loop ends completely:
#    - If nothing is left in storageStack (empty), return true.
#    - Else (something left), return false.

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


            



      

        