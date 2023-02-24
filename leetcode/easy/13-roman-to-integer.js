/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let sum = 0;
  const arr = s.split("");
  let i = 0;
  for (i; i < arr.length; i++) {
    switch (arr[i]) {
      case "I":
        if (arr[i + 1] === "V" || arr[i + 1] === "X") {
          sum = sum + obj[arr[i + 1]] - obj[arr[i]];
          i++;
          break;
        }
        sum += obj[arr[i]];
        break;
      case "X":
        if (arr[i + 1] === "L" || arr[i + 1] === "C") {
          sum = sum + obj[arr[i + 1]] - obj[arr[i]];
          i++;
          break;
        }
        sum += obj[arr[i]];
        break;
      case "C":
        if (arr[i + 1] === "D" || arr[i + 1] === "M") {
          sum = sum + obj[arr[i + 1]] - obj[arr[i]];
          i++;
          break;
        }

        sum += obj[arr[i]];
        break;
      default:
        sum += obj[arr[i]];
    }
  }

  return sum;
};
