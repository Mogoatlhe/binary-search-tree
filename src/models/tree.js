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

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getData()}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function _getNewNode(value) {
    const node = Node();
    node.setData(value);
    return node;
  }

  return { prettyPrint };
};

export default Tree;
