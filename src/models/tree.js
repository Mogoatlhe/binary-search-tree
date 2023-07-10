import Node from "./node.js";

const Tree = (array) => {
  const arr = [...new Set(array)].sort((a, b) => {
    if (a < b) return -1;
    return 1;
  });
  let root = buildTree(0, arr.length - 1);

  function buildTree(start, end) {
    if (end < start) return null;
    const mid = parseInt((start + end) / 2);
    let node = _getNewNode(arr[mid]);
    node.left = buildTree(start, mid - 1);
    node.right = buildTree(mid + 1, end);

    return node;
  }

  const insert = (value) => {
    const node = _getNewNode(value);
    if (root === null) {
      root = node;
      return;
    }

    let curr = root;

    while (curr !== null && curr !== undefined) {
      if (curr.getData() === value) return;
      if (curr.getData() > value) {
        if (curr.left === null || curr.left === undefined) {
          curr.left = node;
          return;
        }

        curr = curr.left;
      } else {
        if (curr.right === null || curr.right === undefined) {
          curr.right = node;
          return;
        }

        curr = curr.right;
      }
    }
  };

  const deleteNode = (value) => {
    // if found
    // if leaf
    //   if root then root = null
    //   if prev.left == value then prev.left = null
    //   if prev.right == value then prev.right = null
    //  return
    // if rmc not exist
    //  if root
    //    root = root.right
    //    return
    //  else
    //    prev.left = curr.left
    //    return;
    // else
    //  go to the right most child (rmc) of the immediate left child
    //  make the rmc the right parent of the immediate right child
    // make rmc the root

    let curr = root;
    let prev = curr;

    while (curr !== undefined && curr !== null) {
      if (curr.getData() === value) {
        if (curr.left === undefined && curr.right === undefined) {
          if (root.getData() === value) root = undefined;
          else if (prev.left !== undefined && prev.left.getData() === value)
            prev.left = undefined;
          else if (prev.right !== undefined && prev.right.getData() === value)
            prev.left = undefined;
          return;
        } else if (curr.left === undefined || curr.left === null) {
          if (curr.getData() === root.getData()) root = root.right;
          else prev.left = curr.right;
        } else {
          let node = curr.left;
          while (node.right != null) node = node.right;
          if (root.getData() === value) {
            node.right = root.right;
            root = root.left;
          } else {
            node.right = curr.right;

            if (
              prev.left !== undefined &&
              prev.left !== null &&
              prev.left.getData() === value
            )
              prev.left = curr.left;
            else if (
              prev.right !== undefined &&
              prev.right !== null &&
              prev.right.getData() === value
            )
              prev.right = curr.left;
          }
        }
        return;
      }

      prev = curr;

      if (curr.getData() > value) curr = curr.left;
      else if (curr.getData() < value) curr = curr.right;
    }
  };

  const find = (value) => {
    if (root === null) return root;

    let curr = root;

    while (curr !== null && curr !== undefined) {
      if (curr.getData() === value) return curr;

      if (curr.getData() > value) curr = curr.left;
      else if (curr.getData() < value) curr = curr.right;
    }

    return null;
  };

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null && node !== undefined) {
      return;
    }
    if (node.right !== null && node.right !== undefined) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getData()}`);
    if (node.left !== null && node.left !== undefined) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function _getNewNode(value) {
    const node = Node();
    node.setData(value);
    return node;
  }

  return { prettyPrint, insert, deleteNode, find };
};

export default Tree;
