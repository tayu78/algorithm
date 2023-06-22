// Suppose we have long characters and short characters.
// For example, long: HelloWorld  short: llo
// The function bellow is to check whether the short one exists or not in the long one

function naiveSearch(long, short) {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) return true;
    }
  }
  return false;
}

console.log(naiveSearch("HelloWorld", "llo"));

/*
long l:2
short l: 0
1. compare long[i] and short[j]
2. if match, keep going, and compare long[i+j],short[j]
3. if doesnt match, go outside of the inner loop
 */
