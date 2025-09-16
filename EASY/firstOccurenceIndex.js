/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === "") return 0;
};

console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
console.log(strStr("a", "a")); // Output: 0
console.log(strStr("a", "b")); // Output: -1
console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("", "")); // Output: 0
console.log(strStr("a", "")); // Output: 0
console.log(strStr("", "a")); // Output: -1
console.log(strStr("mississippi", "issip")); // Output: 4
