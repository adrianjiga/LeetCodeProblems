/*
14. Longest Common Prefix - Easy
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters if it is non-empty.
*/

const longestCommonPrefix = function (strings) {
  if (!strings || strings.length === 0) return "";

  let commonPrefix = strings[0];

  for (let currentIndex = 1; currentIndex < strings.length; currentIndex++) {
    while (!strings[currentIndex].startsWith(commonPrefix)) {
      commonPrefix = commonPrefix.slice(0, -1);
      if (commonPrefix === "") return "";
    }
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["a"])); // Output: "a"
console.log(longestCommonPrefix(["", "b"])); // Output: ""
console.log(longestCommonPrefix(["cir", "car"])); // Output: "c"
