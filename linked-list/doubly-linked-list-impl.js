const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

const sequence = [-10, 5, 7, 0, 8, 45];

sequence.forEach(item => {
    list.prepend(item);
});

list.printList();

const listSize = list.listSize();
console.log('The size of list is:', listSize);

list.deleteHead();
list.printList();

list.deleteTail();
list.printList();

const searchedNode = list.search(7);
console.log('Searched Node:');
console.log(searchedNode);

list.clearList();
list.printList();

sequence.forEach(item => {
    list.append(item);
});

list.printList();
