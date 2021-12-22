/**
 * LeetCode 21. Merge Two Sorted Lists
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 *
 * Example 1: Input: list1 = [1, 2, 4], list2 = [1, 3, 4], Output: [1, 1, 2, 3, 4, 4]
 *
 * Example 2: Input: list1 = [], list2 = [], Output: []
 * 
 * Example 3: Input: list1 = [], list2 = [0], Output: [0]
 *
 */

console.log("LeetCode 21. Merge Two Sorted Lists");
console.log("");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    const result = new SinglyLinkedList();
    let ptr1 = list1.head, ptr2 = list2.head;
    while (ptr1 && ptr2) {
        if (ptr1.value <= ptr2.value) {
            result.append(ptr1.value);
            ptr1 = ptr1.next;
        } else {
            result.append(ptr2.value);
            ptr2 = ptr2.next;
        }
    }
    if (ptr1) {
        result.append(ptr1.value);
        ptr1 = ptr1.next;
    }
    if (ptr2) {
        result.append(ptr2.value);
        ptr2 = ptr2.next;
    }
    return result;
};

const SinglyLinkedList = require('./implementation/singly-linked-list');
const treeify = require('treeify');

const getLinkedList = function (data) {
    const list = new SinglyLinkedList();
    data.forEach((item) => {
        list.append(item);
    });
    return list;
}

// Example 1
console.log('Example 1:');
console.log('');
let list1 = getLinkedList([1, 2, 4]), list2 = getLinkedList([1, 3, 4]);
list1.printList();
list2.printList();

const mergedList1 = mergeTwoLists(list1, list2);
console.log('Example 1: Merged Sorted Linked List');
console.log('');
console.log(treeify.asTree(mergedList1, true));
console.log('');

// Example 2
console.log('Example 2:');
console.log('');
list1 = getLinkedList([]), list2 = getLinkedList([]);
list1.printList();
list2.printList();

const mergedList2 = mergeTwoLists(list1, list2);
console.log('Example 2: Merged Sorted Linked List');
console.log('');
console.log(treeify.asTree(mergedList2, true));
console.log('');

// Example 3
console.log('Example 3:');
console.log('');
list1 = getLinkedList([]), list2 = getLinkedList([0]);
list1.printList();
list2.printList();

const mergedList3 = mergeTwoLists(list1, list2);
console.log('Example 3: Merged Sorted Linked List');
console.log('');
console.log(treeify.asTree(mergedList3, true));
console.log('');
