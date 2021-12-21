/**
 * Print a doubly linked list as below:
 * -10 <===> 5 <===> 7 <===> 0 <===> 8 <===> 45
 *
 * i.e.
 *
 * null <===> -10 <===> 5 <===> 7 <===> 0 <===> 8 <===> 45 <===> null
 */

const treeify = require('treeify');

class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

module.exports = class DoublyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const node = new Node(value);
        // if there is no node or head or tail i.e. if list size is zero
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            // if nodes are present already
            const oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
            oldHead.prev = this.head;
            this.head.prev = null;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        // if there is no node or head or tail i.e. if list size is zero
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            // if nodes are present already
            const oldTail = this.tail;
            this.tail = node;
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
            this.tail.next = null;
        }
        this.size++;
    }

    listSize() {
        return this.size;
    }

    deleteHead() {
        // empty linked-list
        if (!this.head) {
            return;
        }
        // only one item in linked-list
        if (this.head === this.tail) {
            this.head = this.tail = null;
            this.size--;
            return;
        }
        const deletedHead = this.head;
        this.head = deletedHead.next;
        this.head.prev = null;
        this.size--;
        return deletedHead.value;
    }

    deleteTail() {
        // empty linked-list
        if (!this.tail) {
            return;
        }
        // only one item in linked-list
        if (this.head === this.tail) {
            this.head = this.tail = null;
            this.size--;
            return;
        }
        const deletedTail = this.tail;
        this.tail = deletedTail.prev;
        this.tail.next = null;
        this.size--;
        return deletedTail.value;
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    clearList() {
        this.head = this.tail = null;
        this.size = 0;
    }

    printList() {
        console.log(treeify.asTree(this, true));
    }
}
