/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closings = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    switch (c) {
      case "(":
        closings.push(")");
        break;
      case "{":
        closings.push("}");
        break;
      case "[":
        closings.push("]");
        break;
      default:
        if (c !== closings.pop()) {
          return false;
        }
    }
  }
  return closings.length === 0; // to check s is only contaiing opening parentheses
};
