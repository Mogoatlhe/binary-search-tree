import Tree from "./models/tree.js";

function removeDuplicates(array) {
  const arrayCopy = [...array];
  const filteredArray = [...new Set(arrayCopy)];
  return filteredArray;
}

function mergeSort(array) {
  if (array.length < 2) return array;

  const firstHalf = array.slice(0, array.length / 2);
  const secondHalf = array.slice(array.length / 2);

  const left = mergeSort(firstHalf);
  const right = mergeSort(secondHalf);

  const merged = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  while (left.length !== 0) {
    merged.push(left.shift());
  }
  while (right.length !== 0) {
    merged.push(right.shift());
  }

  return merged;
}

function preparedArray(array) {
  const bstArray = mergeSort(removeDuplicates(array));
  return bstArray;
}

function randomArray() {
  const array = [];
  const items = Math.floor(Math.random() * 40 + 10);
  while (array.length < items) {
    array.push(Math.floor(Math.random() * 100 + 1));
  }
  return array;
}

// Driver Script

// Create a binary search tree from an array of random numbers < 100
const tree = Tree(preparedArray(randomArray()));
tree.prettyPrint(tree.root);

// Confirm that the tree is balanced by calling isBalanced.
console.log("Confirm tree is balanced: ", tree.isBalanced()); // true

// Print out all elements in level, pre, post, and in order.
console.log(
  "Level Order Iterative: ",
  tree.levelOrderInterative().map((node) => node.getData())
);
console.log(
  "Level Order Recursive: ",
  tree.levelOrderInterative().map((node) => node.getData())
);
console.log(
  "In Order: ",
  tree.inorder().map((node) => node.getData())
);
console.log(
  "Pre Order: ",
  tree.preorder().map((node) => node.getData())
);
console.log(
  "Post Order: ",
  tree.postorder().map((node) => node.getData())
);

// Unbalance the tree by adding several numbers > 100.
tree.insert(101);
tree.insert(102);
tree.insert(103);
tree.insert(104);
tree.insert(105);
tree.prettyPrint(tree.root);

// Confirm that the tree is unbalanced by calling isBalanced.
console.log("Is the tree balanced? ", tree.isBalanced());

// Balance the tree by calling rebalance.
console.log("it's not balanced, Let me rebalance it for you");
tree.rebalance();
tree.prettyPrint(tree.root);

// Confirm that the tree is balanced by calling isBalanced.
console.log("Are you sure it's balanced now? ", tree.isBalanced()); // true

// Print out all elements in level, pre, post, and in order.
console.log(
  "Level Order Iterative: ",
  tree.levelOrderInterative().map((node) => node.getData())
);
console.log(
  "Level Order Recursive: ",
  tree.levelOrderInterative().map((node) => node.getData())
);
console.log(
  "In Order: ",
  tree.inorder().map((node) => node.getData())
);
console.log(
  "Pre Order: ",
  tree.preorder().map((node) => node.getData())
);
console.log(
  "Post Order: ",
  tree.postorder().map((node) => node.getData())
);
