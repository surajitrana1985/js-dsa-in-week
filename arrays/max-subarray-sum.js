/**
 * Find the maximum sub-array sum in the below array
 * @Input: [-5, 4, 6, -3, 4, -1]
 * @Output: 11
 */
console.log("Max Sub-Array sum");
const input_array = [-5, 4, 6, -3, 4, -1];

/**
 * Brute-Force Solution - Time Complexity - O(N²)
 * @Input: [-5, 4, 6, -3, 4, -1]
 * @Output: 11
 */

function maxSubArraySumBruteForce(sequence) {
    let maxSum = sequence[0], curSum = 0;
    for (let i = 0; i < sequence.length; i++) {
        for (let j = i; j < sequence.length; j++) {
            curSum += sequence[j];
            if (curSum > maxSum) {
                maxSum = curSum;
            }
        }
        curSum = 0;
    }
    return maxSum;
}

/**
 * Kadane's Algorithm to optimize above solution in Time Complexity - O(N)
 * @Input: [-5, 4, 6, -3, 4, -1]
 * @Output: 11
 */

function maxSubArraySumKadanesAlgorithm(sequence) {
    let maxSum = 0, curSum = 0;
    for (let i = 0; i < sequence.length; i++) {
        curSum += sequence[i];
        if (curSum > maxSum) {
            maxSum = curSum;
        }
        if (curSum < 0) {
            curSum = 0;
        }
    }
    return maxSum;
}

const maxSumBruteForce = maxSubArraySumBruteForce(input_array);
console.log(`The maximum sub-array sum by Brute-Force method is: ${maxSumBruteForce}`);

const maxSumKadanesAlgo = maxSubArraySumKadanesAlgorithm(input_array);
console.log(`The maximum sub-array sum by Kadane's Algorithm is: ${maxSumKadanesAlgo}`);
