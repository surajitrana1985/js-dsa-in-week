/**
 * LeetCode 122. Best Time to Buy and Sell Stock II
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time.
 * However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 *
 * Example 1: Input: prices = [7, 1, 5, 3, 6, 4], Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 * Total profit is 4 + 3 = 7.
 *
 * Example 2: Input: prices = [1, 2, 3, 4, 5], Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Total profit is 4.
 *
 * Example 3: Input: prices = [7, 6, 4, 3, 1], Output: 0
 * Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 */

console.log("LeetCode 122. Best Time to Buy and Sell Stock II");

function getMaxProfitPointerMethod(prices) {
	let currentProfit = 0,
		maxProfit = 0;
	for (let i = 1; i < prices.length; i++) {
		currentProfit = prices[i] - prices[i - 1];
		if (currentProfit < 0) {
			currentProfit = 0;
		}
		maxProfit += currentProfit;
	}
	return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
let maxProfitPointer = getMaxProfitPointerMethod(prices);
console.log(
	`Example 1: The maximum profit by Pointer method is: ${maxProfitPointer}`
);

prices = [1, 2, 3, 4, 5];
maxProfitPointer = getMaxProfitPointerMethod(prices);
console.log(
	`Example 2: The maximum profit by Pointer method is: ${maxProfitPointer}`
);

prices = [7, 6, 4, 3, 1];
maxProfitPointer = getMaxProfitPointerMethod(prices);
console.log(
	`Example 3: The maximum profit by Pointer method is: ${maxProfitPointer}`
);
