/**
 * Print a doubly linked list as below:
 * 1 ====> 2 ====> 3 ====> 4 ====> 5 ====> 6
 *
 * i.e.
 *
 * null ====> 1 ====> 2 ====> 3 ====> 4 ====> 5 ====> 6 ====> null
 */

const treeify = require('treeify');

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

module.exports = class SinglyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const node = new Node(value);
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            const oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
            this.size++;
        }
    }

    append(value) {
        const node = new Node(value);
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            const oldTail = this.tail;
            this.tail = node;
            this.tail.next = null;
            oldTail.next = this.tail;
        }
        this.size++;
    }

    listSize() {
        return this.size;
    }

    deleteHead() {
        // empty list
        if (!this.head) {
            return;
        }
        // list with only one item
        if (this.head === this.tail) {
            this.head = this.tail = null;
            this.size--;
            return this.head.value;
        }
        const deletedHead = this.head;
        this.head = deletedHead.next;
        this.size--;
        return deletedHead.value;
    }

    deleteTail() {
        // empty list
        if (!this.tail) {
            return;
        }
        // list with only one item
        if (this.head === this.tail) {
            this.head = this.tail = null;
            this.size--;
            return this.tail.value;
        }
        const deletedTail = this.tail;
        const getPreviousNode = (tail) => {
            let currentNode = this.head, prevNode;
            while (currentNode) {
                if (currentNode.value === tail.value) {
                    return prevNode;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        const prevNode = getPreviousNode(this.tail);
        this.tail = prevNode;
        this.tail.next = null;
        this.size--;
        return deletedTail.value;
    }

    search(value) {
        // empty list
        if (!this.tail) {
            return;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    printList() {
        console.log(treeify.asTree(this, true));
    }

    clearList() {
        this.head = this.tail = null;
        this.size = 0;
    }
}
