/**
 * LeetCode 48. Rotate Image
 * Link: https://leetcode.com/problems/rotate-image/
 *
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 *
 * Example 1: Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
 *                    1     2     3             7     4     1
 *
 *                    4     5     6      →      8     5     2
 *
 *                    7     8     9             9     6     3
 *
 * Example 2: Input: matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]],
 *            Output: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
 *
 * Example 3: Input: matrix = [[1]], Output: [[1]]
 *
 * Example 4: Input: matrix = [[1, 2], [3, 4]], Output: [[3, 1], [4, 2]]
 *
 */

console.log("LeetCode 48. Rotate Image");

/**
 * This function will first transpose the matrix and then will swap the 1st column with 3rd column of matrix.
 * So that the resultant matrix will seem to be a rotated matrix of the input by 90 degrees
 * @param {*} matrix
 * @returns matrix
 */
function getMatrixRotation90Deg(matrix) {
	const rows = matrix.length;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j <= i; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	for (let i = 0; i < rows; i++) {
		let li = 0,
			ri = rows - 1;
		while (li < ri) {
			const temp = matrix[i][li];
			matrix[i][li] = matrix[i][ri];
			matrix[i][ri] = temp;
			li++;
			ri--;
		}
	}
	return matrix;
}

const matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const rotationMatrix1 = getMatrixRotation90Deg(matrix1);
console.log(`Example 1: The rotated matrix (by 90 degrees) is :`);
console.log(rotationMatrix1);

const matrix2 = [
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
];

const rotationMatrix2 = getMatrixRotation90Deg(matrix2);
console.log(`Example 2: The rotated matrix (by 90 degrees) is :`);
console.log(rotationMatrix2);

const matrix3 = [[1]];

const rotationMatrix3 = getMatrixRotation90Deg(matrix3);
console.log(`Example 3: The rotated matrix (by 90 degrees) is :`);
console.log(rotationMatrix3);

const matrix4 = [
	[1, 2],
	[3, 4],
];

const rotationMatrix4 = getMatrixRotation90Deg(matrix4);
console.log(`Example 4: The rotated matrix (by 90 degrees) is :`);
console.log(rotationMatrix4);
