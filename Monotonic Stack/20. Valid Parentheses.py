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
# 1. Loop through the character of input s.
# 2. Make a dictionary/object to check parentheses match and make a storageStack to stack the input s character.
# 3. Looping through the input s and if the character is a closing parentheses, pop the last element from storageStack. Return false if storageStack was empty or the popped element is not matching.
# 4. Looping thorugh the input s and pop the last element in storageStack if the character is closing parentheses and last element of the storageStack is matching opening parentehses.
# 5. When loop ends till the end and nothing left in the storageStack, return ture.
# 6. When loop ends but there is something left in storageStack, return false.

 # input s =" "([])" => output = true



class Solution:
    def isValid(self, s: str) -> bool:
        