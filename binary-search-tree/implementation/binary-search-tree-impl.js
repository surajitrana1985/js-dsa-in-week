const BinarySearchTree = require('./binary-search-tree');

const bst = new BinarySearchTree();
const sequence = [8, 3, 10, 1, 6, 14, 4, 7, 13];
sequence.forEach(item => {
    bst.insertNode(item);
});

bst.printTree();

const minValueBST = bst.min();
const maxValueBST = bst.max();
console.log(`Minimum value in Binary Search Tree: ${minValueBST}, while Maximum value in Binary Search Tree: ${maxValueBST}`);

let target = 14;
let isPresentInBST = bst.contains(target);
console.log(`${target} is present in BST: ${isPresentInBST}`);

target = 0;
isPresentInBST = bst.contains(target);
console.log(`${target} is present in BST: ${isPresentInBST}`);

const dfsInorderData = bst.dfsInOrder();
console.log('In-order depth first search : ', dfsInorderData);

const dfsPreorderData = bst.dfsPreOrder();
console.log('Pre-order depth first search : ', dfsPreorderData);

const dfsPostorderData = bst.dfsPostOrder();
console.log('Post-order depth first search : ', dfsPostorderData);

const bfsData = bst.bfsSearch();
console.log('Breadth first search : ', bfsData);
