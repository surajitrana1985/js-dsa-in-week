/**
 * LeetCode 206. Reverse Linked List - Recursive Approach
 * Link: https://leetcode.com/problems/reverse-linked-list/
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1: Input: head = [1, 2, 3, 4, 5], Output: [5, 4, 3, 2, 1]
 *
 * Example 2: Input: head = [1, 2], Output: [2, 1]
 * 
 * Example 3: Input: head = [], Output: []
 *
 */

console.log("LeetCode 206. Reverse Linked List - Recursive Approach");
console.log("");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Iterative Approach
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let newHead = reverseList(head.next);
    let headNext = head.next;
    headNext.next = head;
    head.next = null;
    return newHead;
};

const SinglyLinkedList = require('./implementation/singly-linked-list');
const treeify = require('treeify');

const head1 = [1, 2, 3, 4, 5];
const list1 = new SinglyLinkedList();
head1.forEach(item => {
    list1.append(item);
});

console.log('Example 1: Original List [1, 2, 3, 4, 5]');
list1.printList();

const reverseList1 = reverseList(list1.head);
console.log('Example 1: Reverse of List [1, 2, 3, 4, 5]:');
console.log(treeify.asTree(reverseList1, true));

const head2 = [1, 2];
const list2 = new SinglyLinkedList();
head2.forEach(item => {
    list2.append(item);
});

console.log('Example 2: Original List [1, 2]');
list2.printList();

const reverseList2 = reverseList(list2.head);
console.log('Example 2: Reverse of List [1, 2]:');
console.log(treeify.asTree(reverseList2, true));

const head3 = [];
const list3 = new SinglyLinkedList();
head3.forEach(item => {
    list3.append(item);
});

console.log('Example 3: Original List []');
list3.printList();

const reverseList3 = reverseList(list3.head);
console.log('Example 3: Reverse of List []:');
console.log(treeify.asTree(reverseList3, true));
