# binary-search-tree

BST implementation in JavaScript

<div class="lesson-content__panel" markdown="1">

1. `Node`: a factory. That has an attribute for the data it stores as well as its left and right children.

1. `Tree`: a factory which accepts an array when initialized. The `Tree` has a `root` attribute which uses the return value of `buildTree`.

1. `buildTree`: a function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of `Node` objects appropriately placed . The `buildTree` function returns the level-0 root node.

1. `insert` and `delete`: functions which accepts a value to insert/delete.

1. `find`: function which accepts a value and returns the node with the given value.

1. `levelOrder`: function which accepts another function as a parameter. `levelOrder` traverses the tree in breadth-first level order and provides each node as the argument to the provided function. This function is implemented using both iteration and recursion. The method returns an array of values if no function is given.

1. `inorder`, `preorder`, and `postorder`: functions that accept a function parameter. Each of these functions traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions return an array of values if no function is given.

1. `height`: function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.

1. `depth`: function which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree's root node.

1. `isBalanced`: function which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

1. `rebalance`: function which rebalances an unbalanced tree.

</div>
