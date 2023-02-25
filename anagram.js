/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 * time complexity should be O(n)
 */

/**
 *
 * @param {*} str1
 * @param {*} str2
 * @returns boolean
 */
function validAnagram(str1, str2) {
  const obj1 = {};
  const obj2 = {};
  if (str1.length !== str2.length) return false;

  for (const str of str1) {
    obj1[str] = ++obj1[str] || 0;
  }

  for (const str of str2) {
    obj2[str] = ++obj2[str] || 0;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

// memo:  difference of var++ and ++var
/**
 *  var++ and ++var are both add 1 to var
 *  but return value is defferent.
 *  ex) 1++ returns 1 , ++1 returns 2
 * so, when we assign to variable and want  that to be the value after addition, we should use ++var
 *
 */
