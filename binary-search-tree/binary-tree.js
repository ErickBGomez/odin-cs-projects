import Node from "./node.js";
import sortAndRemoveDuplicted from "./util.js";

class BinaryTree {
  root;

  #insertTreeNode(array, start, end) {
    if (start > end) return null;

    const mid = Math.trunc((start + end) / 2);

    const node = new Node(array[mid]);

    node.left = this.#insertTreeNode(array, start, mid - 1);
    node.right = this.#insertTreeNode(array, mid + 1, end);

    return node;
  }

  buildTree(array) {
    const sortedArray = sortAndRemoveDuplicted(array);

    this.root = this.#insertTreeNode(sortedArray, 0, sortedArray.length - 1);

    return this.root;
  }
}

export default BinaryTree;
