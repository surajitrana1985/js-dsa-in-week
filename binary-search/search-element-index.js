/**
 * LeetCode 704. Binary Search
 * Link: https://leetcode.com/problems/binary-search/
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1: Input: nums = [-1, 0, 3, 5, 9, 12], target = 9, Output: 4, Explanation: 9 exists in nums and its index is 4
 *
 * Example 2: Input: nums = [-1, 0, 3, 5, 9, 12], target = 2, Output: -1, Explanation: 2 does not exist in nums so return -1
 *
 */

console.log("LeetCode 704. Binary Search");
console.log("");

/**
 * Binary Search Iterative
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearchIterative = function (nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        }
    }
    return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
const numIndex1 = binarySearchIterative(nums, target);
console.log('Example 1: Iterative Binary Search : Index of 9 in [-1, 0, 3, 5, 9, 12] is', numIndex1);

target = 2;
const numIndex2 = binarySearchIterative(nums, target);
console.log('Example 1: Iterative Binary Search : Index of 9 in [-1, 0, 3, 5, 9, 12] is', numIndex2);

/**
 * Binary Search Recursive
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearchRecursive = function (nums, target, low, high) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) {
        return mid;
    } else {
        if (target > nums[mid]) {
            return binarySearchRecursive(nums, target, mid + 1, high);
        } else {
            return binarySearchRecursive(nums, target, low, mid - 1);
        }
    }
};

target = 9;
const numIndex3 = binarySearchRecursive(nums, target, 0, nums.length - 1);
console.log('Example 1: Recursive Binary Search : Index of 9 in [-1, 0, 3, 5, 9, 12] is', numIndex3);

target = 2;
const numIndex4 = binarySearchRecursive(nums, target, 0, nums.length - 1);
console.log('Example 1: Recursive Binary Search : Index of 9 in [-1, 0, 3, 5, 9, 12] is', numIndex4);
