const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();
list.prepend(45);
list.prepend(8);
list.prepend(0);
list.prepend(7);
list.prepend(5);
list.prepend(-10);
list.printList();

const listSize = list.listSize();
console.log('The size of list is:', listSize);

list.deleteHead();
list.printList();

list.deleteTail();
list.printList();

const searchedNode = list.search(7);
console.log('Searched Node: ', searchedNode);

list.clearList();
list.printList();

list.append(-10);
list.append(5);
list.append(7);
list.append(0);
list.append(8);
list.append(45);
list.printList();
