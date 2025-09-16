/** 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false


Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/

const isValid = function (str) {
  const openBracketStack = [];
  const openToCloseBracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let currentChar of str) {
    if (openToCloseBracketMap[currentChar]) {
      openBracketStack.push(openToCloseBracketMap[currentChar]);
    } else if (openBracketStack.pop() !== currentChar) {
      return false;
    }
  }

  return openBracketStack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
