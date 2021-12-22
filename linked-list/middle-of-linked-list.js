/**
 * LeetCode 876. Middle of the Linked List
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time.
 * However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 *
 * Example 1: Input: head = [1, 2, 3, 4, 5], Output: [3, 4, 5], Explanation: The middle node of the list is node 3.
 *
 * Example 2: Input: head = [1, 2, 3, 4, 5, 6], Output: [4, 5, 6], Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 *
 */

console.log("LeetCode 876. Middle of the Linked List");

/**
 * Find the middle element of a linked-list
 * @param {*} list
 * @returns linked-list
 */
function findMiddleOfLinkedList(list) {
    let slow = list.head,
        fast = list.head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const SinglyLinkedList = require("./implementation/singly-linked-list");
const treeify = require("treeify");

const list = new SinglyLinkedList();

let head = [1, 2, 3, 4, 5];
head.forEach((item) => {
    list.append(item);
});

list.printList();

const middleLinkedList1 = findMiddleOfLinkedList(list);
console.log("Example 1: Middle of Linked-list [1, 2, 3, 4, 5]: ");
console.log(treeify.asTree(middleLinkedList1, true));

list.clearList();

head = [1, 2, 3, 4, 5, 6];
head.forEach((item) => {
    list.append(item);
});

list.printList();

const middleLinkedList2 = findMiddleOfLinkedList(list);
console.log("Example 2: Middle of Linked-list [1, 2, 3, 4, 5, 6]: ");
console.log(treeify.asTree(middleLinkedList2, true));
