//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//  An input string is valid if:

//  Open brackets must be closed by the same type of brackets.
//  Open brackets must be closed in the correct order.
//  Every close bracket has a corresponding open bracket of the same type.
 

//  Example 1:

//  Input: s = "()"

//  Output: true

//  Example 2:

//  Input: s = "()[]{}"

//  Output: true

//  Example 3:

//  Input: s = "(]"

//  Output: false

//  Example 4:

//  Input: s = "([])"

//  Output: true

//  Example 5:

//  Input: s = "([)]"

//  Output: false


// Input : "(([[]]))"
//  Input : "]"
//  Input : "{[]}("

//  Optimal Approach:
//  Loop through all the characters in input s
//  Make a math dictionary to check bracket match and Make a storage_stack array to store brackets
//  If the bracket is an opening bracket, store the bracket into storage_stack
//  else(if the bracket is a closing bracket),
//     # if storage_stack is empty, return immediately, there is nothing to check match
//     # Else(storage_stack is not emtpy), pop the last element for the storage_stack
//     # if current character(closing bracket) does not match with popped_element, return false
//  when the loop ends
//     # if nothing left in storage_stack, return true
//     # else(something left), return false
//  Time complexity: O(n) - As we are iterating through the string once.
//  Space complexity: O(n) - As we are using a stack to store the opening brackets

//  input s = "([])" => output = true


function isValid(s: string): boolean {

    const matchDictionary: Record<string, string> = {
        "(" : ")", 
        "{" : "}", 
        "[" : "]"
        };
    
    let storageStack: string[] = [];
    
    // Loop through the chracter of input s
    for (let char of s) {
        // If the character is an opening bracket, push it into storageStack
        if (char in matchDictionary) {
            storageStack.push(char);
        }
        // if not
        else {
            //if the character is a closing bracket and storageStack is empty, return false. There is nothing to match
            if (storageStack.length === 0) {
                return false
            }
            //else(if character is a closing bracket and storageStack is not emtpy), pop the last element from storageStack to check match
            let poppedElement = storageStack.pop();
            //if character is not matching closing bracket to popped element, retrun false
            if (char !== matchDictionary[poppedElement || ""]) {
                return false;
            }
        }
    }
    // when loop finished, return true if storageStack is empty, else return false
    return storageStack.length === 0;

    
};