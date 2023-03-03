/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let profit = 0
//     for(let i =0; i< prices.length; i++){
//         for(let j = i+1; j < prices.length; j++){
//             let tmpProfit =   prices[j] - prices[i]
//             if(tmpProfit > 0 && tmpProfit > profit){
//                 profit = tmpProfit
//             }
//         }
//     }

//     return profit;
// };

// the above code exceeded time limit.

var maxProfit = function (prices) {
  let profit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;
      right++;
      continue;
    }
    if (profit < prices[right] - prices[left]) {
      profit = prices[right] - prices[left];
    }
    right++;
  }

  return profit;
};
