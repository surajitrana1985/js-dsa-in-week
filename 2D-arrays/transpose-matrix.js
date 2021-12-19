/**
 * LeetCode 867. Transpose Matrix
 * Link: https://leetcode.com/problems/spiral-matrix/
 *
 * Given a 2D integer array matrix, return the transpose of matrix.
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 *
 * Example 1:Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
 *
 * Example 2: Input: matrix = [[2, 4, -1], [-10, 5, 11], [18, -7, 6]], Output: [[2, -10, 18], [4, 5, -7], [-1, 11, 6]]
 *
 *                   2      4    -1             2     -10     18
 *
 *                  -10     5    11      →      4      5     -7
 *
 *                   18    -7    6             -1      11     6
 *
 *
 * Example 3: Input: matrix = [[1, 2, 3], [4, 5, 6]], Output: [[1, 4], [2, 5], [3, 6]]
 *
 */

console.log("LeetCode 867. Transpose Matrix");

/**
 * Transpose of a matrix is possible only for a square matrix M X M
 * @param {*} matrix
 * @returns matrix
 */
function getMatrixTranspose(matrix) {
	const rows = matrix.length,
		cols = matrix[0].length;
	if (rows !== cols) {
		const resultant = [];
		for (let i = 0; i < cols; i++) {
			const rowData = [];
			for (let j = 0; j < rows; j++) {
				rowData.push(matrix[j][i]);
			}
			resultant.push(rowData);
		}
		return resultant;
	} else {
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j <= i; j++) {
				const temp = matrix[i][j];
				matrix[i][j] = matrix[j][i];
				matrix[j][i] = temp;
			}
		}
		return matrix;
	}
}

const matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const transpose1 = getMatrixTranspose(matrix1);
console.log(`Example 1: The transpose of matrix is :`);
console.log(transpose1);

const matrix2 = [
	[2, 4, -1],
	[-10, 5, 11],
	[18, -7, 6],
];

const transpose2 = getMatrixTranspose(matrix2);
console.log(`Example 2: The transpose of matrix is :`);
console.log(transpose2);

const matrix3 = [
	[1, 2, 3],
	[4, 5, 6],
];

const transpose3 = getMatrixTranspose(matrix3);
console.log(`Example 3: The transpose of matrix is :`);
console.log(transpose3);
