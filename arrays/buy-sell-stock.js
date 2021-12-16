/**
 * LeetCode 121. Best Time to Buy and Sell Stock
 * Link: https://leetcode.com/problems/maximum-subarray/
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a
 * different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1: Input: prices = [7, 1, 5, 3, 6, 4], Output: 5
 * Example 2: Input: prices = [7, 6, 4, 3, 1], Output: 0
 */

console.log('LeetCode 121. Best Time to Buy and Sell Stock')

/**
 * Solution 1: Brute-Force Solution
 * Time Complexity - O(N²)
 * Space Complexity - O(1)
 */

function getMaxProfitBruteForce(prices) {
  let maxProfit = 0,
    currentProfit = 0,
    buyPrice,
    sellPrice
  for (let i = 0; i < prices.length; i++) {
    // loop for stock buy
    buyPrice = prices[i]
    for (let j = i; j < prices.length; j++) {
      // loop for stock sell
      sellPrice = prices[j]
      currentProfit = sellPrice - buyPrice
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit
      }
    }
  }
  return maxProfit
}

let prices = [7, 1, 5, 3, 6, 4]
let maxProfitBruteForce = getMaxProfitBruteForce(prices)
console.log(
  `Example 1: The maximum profit by Brute-Force method is: ${maxProfitBruteForce}`,
)

prices = [7, 6, 4, 3, 1]
maxProfitBruteForce = getMaxProfitBruteForce(prices)
console.log(
  `Example 2: The maximum profit by Brute-Force method is: ${maxProfitBruteForce}`,
)

/**
 * Solution 2: Array Pre-Processing Solution
 * Time Complexity - O(N)
 * Space Complexity - O(N)
 */

function getMaxProfitArrayPreprocessing(prices) {
  let maxProfit = 0,
    currentProfit = 0,
    aux_array = Array.from(prices),
    currentMax = prices[prices.length - 1]
  for (let i = prices.length - 1; i >= 0; i--) {
    // loop for pre-processing array of prices
    if (currentMax >= prices[i]) {
      aux_array[i] = currentMax
    } else {
      currentMax = prices[i]
    }
  }
  for (let i = 0; i < prices.length; i++) {
    currentProfit = aux_array[i] - prices[i]
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
    }
  }
  return maxProfit
}

prices = [7, 1, 5, 3, 6, 4]
let maxProfitArrayPreprocess = getMaxProfitArrayPreprocessing(prices)
console.log(
  `Example 1: The maximum profit by Array Pre-Processing method is: ${maxProfitArrayPreprocess}`,
)

prices = [7, 6, 4, 3, 1]
maxProfitArrayPreprocess = getMaxProfitArrayPreprocessing(prices)
console.log(
  `Example 2: The maximum profit by Array Pre-Processing method is: ${maxProfitArrayPreprocess}`,
)

/**
 * Solution 3: Two Pointer Solution
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */

function getMaxProfitPointerMethod(prices) {
  let maxProfit = 0,
    currentProfit = 0,
    previousMin = prices[0]
  for (let i = 0; i < prices.length; i++) {
    currentProfit = prices[i] - previousMin
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
    }
    if (prices[i] < previousMin) {
      previousMin = prices[i]
    }
  }
  return maxProfit
}

prices = [7, 1, 5, 3, 6, 4]
let maxProfitPointer = getMaxProfitPointerMethod(prices)
console.log(
  `Example 1: The maximum profit by Pointer method is: ${maxProfitPointer}`,
)

prices = [7, 6, 4, 3, 1]
maxProfitPointer = getMaxProfitPointerMethod(prices)
console.log(
  `Example 2: The maximum profit by Pointer method is: ${maxProfitPointer}`,
)
