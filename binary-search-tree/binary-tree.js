import Node from "./node.js";

class BinaryTree {
  #root = null;
  #array;

  constructor(array) {
    this.#array = array;
  }

  buildTree(array, start, end) {
    if (start > end) return null;

    const mid = (start + end) / 2;

    this.#root = new Node(array[mid]);

    this.#root.left = this.buildTree(array, start, mid - 1);
    this.#root.right = this.buildTree(array, mid + 1, end);

    return this.#root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

export default BinaryTree;
