const treeify = require('treeify');

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

module.exports = class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 0;
    }

    insertNode(value) {
        this.count++;
        const newNode = new Node(value);
        if (!this.root || !this.root.value) {
            this.root = newNode;
            return;
        }
        const searchTree = (node) => {
            if (value < node.value) {
                // if there is no left node
                if (!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            } else {
                // if there is no right node
                if (!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                }
            }
        };
        searchTree(this.root);
    }

    size() {
        return this.count;
    }

    min() {
        let current = this.root;
        while (current && current.left) {
            current = current.left;
        }
        return current.value;
    }

    max() {
        let current = this.root;
        while (current && current.right) {
            current = current.right;
        }
        return current.value;
    }

    contains(value) {
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    printTree() {
        console.log(treeify.asTree(this, true));
    }

    /**
     * Depth First Search
     * In-Order Search Algorithms
     * left → root → right
     */
    dfsInOrder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            result.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    /**
     * Depth First Search
     * Pre-Order Search Algorithms
     * root → left → right
     */
    dfsPreOrder() {
        const result = [];
        const traverse = (node) => {
            result.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    /**
     * Depth First Search
     * Post-Order Search Algorithms
     * left → right → root
     */
    dfsPostOrder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            result.push(node.value);
        };
        traverse(this.root);
        return result;
    }

    /**
     * Breadth First Search
     */
    bfsSearch() {
        const result = [];
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    }

}
