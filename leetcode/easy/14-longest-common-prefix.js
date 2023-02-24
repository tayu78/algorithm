/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  strs.slice(1).forEach((str) => {
    let tmpPrefix = "";
    for (let i = 0; i <= str.length; i++) {
      if (!prefix[i]) continue;
      if (prefix[i] === str[i]) {
        tmpPrefix += prefix[i];
      } else break;
    }
    prefix = tmpPrefix;
  });

  return prefix;
};
