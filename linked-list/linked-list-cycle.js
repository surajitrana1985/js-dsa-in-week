/**
 * LeetCode 141. Linked List Cycle
 * Link: https://leetcode.com/problems/linked-list-cycle/
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Example 1: Input: head = [3, 2, 0, -4], pos = 1, Output: true, 
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 *
 * Example 2: Input: head = [1, 2], pos = 0, Output: true, 
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 * 
 * Example 3: Input: head = [1], pos = -1, Output: false, 
 * Explanation: There is no cycle in the linked list.
 *
 */

console.log("LeetCode 141. Linked List Cycle");
console.log("");

const SinglyLinkedList = require("./implementation/singly-linked-list");

/**
 * Creating new tail to have a circular reference
 * @param {*} list 
 * @param {*} tailRef 
 * @returns 
 */
const getCircularRefList = function (list, tailRef) {
    const searchedNode = list.search(tailRef);
    if (searchedNode) {
        const oldTail = list.tail;
        oldTail.next = searchedNode;
        list.tail = searchedNode;
    }
    return list;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    let slow = head, fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};

// Example 1
const list1 = new SinglyLinkedList();

let head1 = [3, 2, 0, -4];
head1.forEach((item) => {
    list1.append(item);
});

const circularList1 = getCircularRefList(list1, 2);
circularList1.printList();

const listHasCycle1 = hasCycle(list1.head);
console.log('Example 1: Linked-list has cycle:', listHasCycle1);
console.log('');

// Example 2
const list2 = new SinglyLinkedList();

let head2 = [1, 2];
head2.forEach((item) => {
    list2.append(item);
});

const circularList2 = getCircularRefList(list2, 1);
circularList2.printList();

const listHasCycle2 = hasCycle(list2.head);
console.log('Example 2: Linked-list has cycle:', listHasCycle2);
console.log('');


// Example 3
const list3 = new SinglyLinkedList();

let head3 = [1];
head3.forEach((item) => {
    list3.append(item);
});

const circularList3 = getCircularRefList(list3, -1);
circularList3.printList();

const listHasCycle3 = hasCycle(list3.head);
console.log('Example 3: Linked-list has cycle:', listHasCycle3);
console.log('');
