/**
 * LeetCode 42. Trapping Rain Water
 * Link: https://leetcode.com/problems/trapping-rain-water/
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time.
 * However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 *
 * Example 1: Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].
 * In this case, 6 units of rain water (blue section) are being trapped.
 *
 * Example 2: Input: height = [4, 2, 0, 3, 2, 5], Output: 9
 *
 */

console.log("LeetCode 42. Trapping Rain Water");

/**
 * Solution 1: Array Pre-Processing Solution
 * Time Complexity - O(3N) ~ O(N)
 * Space Complexity - O(2N) ~ O(N)
 * @param {*} height
 * @returns
 */
function getTrappedWaterArrayPreprocessing(height) {
	let heightAuxLeft = Array.from(height),
		heightAuxRight = Array.from(height),
		prevMax = 0,
		trapped = 0;
	for (let i = 0; i < height.length; i++) {
		if (height[i] > prevMax) {
			heightAuxLeft[i] = height[i];
			prevMax = height[i];
		} else {
			heightAuxLeft[i] = prevMax;
		}
	}
	prevMax = 0;
	for (let i = height.length - 1; i >= 0; i--) {
		if (height[i] > prevMax) {
			heightAuxRight[i] = height[i];
			prevMax = height[i];
		} else {
			heightAuxRight[i] = prevMax;
		}
	}
	for (let i = 0; i < height.length; i++) {
		trapped += Math.min(heightAuxLeft[i], heightAuxRight[i]) - height[i];
	}
	return trapped;
}

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let trappedWaterArrayPreprocess = getTrappedWaterArrayPreprocessing(height);
console.log(
	`Example 1:  Rain water trapped by Array Preprocessing method is: ${trappedWaterArrayPreprocess}`
);

height = [4, 2, 0, 3, 2, 5];
trappedWaterArrayPreprocess = getTrappedWaterArrayPreprocessing(height);
console.log(
	`Example 2:  Rain water trapped by Array Preprocessing method is: ${trappedWaterArrayPreprocess}`
);

/**
 * Solution 2: Two-Pointer Solution
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 * @param {*} height
 * @returns
 */
function getTrappedWaterTwoPointer(height) {
	let trapped = 0,
		left = 0,
		right = height.length - 1,
		lmax = 0,
		rmax = 0;
	while (left <= right) {
		if (height[left] <= height[right]) {
			if (height[left] >= lmax) {
				lmax = height[left];
			} else {
				trapped += lmax - height[left];
			}
			left++;
		} else {
			if (height[right] >= rmax) {
				rmax = height[right];
			} else {
				trapped += rmax - height[right];
			}
			right--;
		}
	}
	return trapped;
}

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let trappedWaterTwoPointer = getTrappedWaterTwoPointer(height);
console.log(
	`Example 1:  Rain water trapped by Two-Pointer Solution method is: ${trappedWaterTwoPointer}`
);

height = [4, 2, 0, 3, 2, 5];
trappedWaterTwoPointer = getTrappedWaterTwoPointer(height);
console.log(
	`Example 2:  Rain water trapped by Two-Pointer Solution method is: ${trappedWaterTwoPointer}`
);
