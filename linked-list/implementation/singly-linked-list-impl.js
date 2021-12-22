const SinglyLinkedList = require('./singly-linked-list');

const list = new SinglyLinkedList();

const sequence = [0, 1, 2, 3, 4, 5, 6, 7];
sequence.forEach(item => {
    list.prepend(item);
});

list.printList();

list.clearList();
list.printList();

sequence.forEach(item => {
    list.append(item);
});

list.printList();

const listSize = list.listSize();
console.log('The size of list is:', listSize);

list.deleteHead();
list.printList();

const searchedItem = list.search(5);
console.log('Searched Node:');
console.log(searchedItem);

list.deleteTail();
list.printList();
