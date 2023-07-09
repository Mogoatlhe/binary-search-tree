import Node from "./node.js";

const Tree = (array) => {
  const arr = [...new Set(array)].sort((a, b) => {
    if (a < b) return -1;
    return 1;
  });
  let root;

  return {};
};

export default Tree;
