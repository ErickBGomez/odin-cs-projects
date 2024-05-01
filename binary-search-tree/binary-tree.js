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

    this.#root.left = buildTree(array, start, mid - 1);
    this.#root.right = this.buildTree(array, mid + 1, end);

    return this.#root;
  }
}

export default BinaryTree;
