/**
 * LeetCode 54. Spiral Matrix
 * Link: https://leetcode.com/problems/spiral-matrix/
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1: 
 *                  1 → 2 → 3
 *                          ↓
 *                  4 → 5   6
 *                  ↑       ↓
 *                  7 ← 8 ← 9
 * 
 * Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 * Example 2: 
 *                  1  →  2  →  3  →  4
 *                                    ↓
 *                  5  →  6  →  7     8
 *                  ↑                 ↓
 *                  9  ← 10  ← 11 ←  12
 * 
 * Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 *
 */

console.log("LeetCode 54. Spiral Matrix");

function spiralTraversalMatrix(matrix) {
	const rows = matrix.length,
		columns = matrix[0].length, traversal = [];
    let top = 0, bottom = rows - 1, left = 0, right = columns - 1, direction = 0;
    while (left <= right && top <= bottom) {
        if (direction === 0) {
            for (let i = left; i <= right; i++) {
                traversal.push(matrix[top][i]);
            }
            top++;
        } else if (direction === 1) {
            for (let i = top; i <= bottom; i++) {
                traversal.push(matrix[i][right]);
            }
            right--;
        } else if (direction === 2) {
            for (let i = right; i >= left; i--) {
                traversal.push(matrix[bottom][i]);
            }
            bottom--;
        } else if (direction === 3) {
            for (let i = bottom; i >= top; i--) {
                traversal.push(matrix[i][left]);
            }
            left++;
        }
        direction = (direction + 1) % 4;
    }
	return traversal;
}

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const traversal1 = spiralTraversalMatrix(matrix1);
console.log(`Example 1: The spiral traversal of matrix is :`);
console.log(traversal1);

let matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
const traversal2 = spiralTraversalMatrix(matrix2);
console.log(`Example 2: The spiral traversal of matrix is :`);
console.log(traversal2);
