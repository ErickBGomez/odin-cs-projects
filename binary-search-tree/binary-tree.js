import Node from "./node.js";
import sortArray from "./util.js";

class BinaryTree {
  #insertTreeNode(array, start, end) {
    if (start > end) return null;

    const mid = Math.trunc((start + end) / 2);

    const root = new Node(array[mid]);

    root.left = this.insertTreeNode(array, start, mid - 1);
    root.right = this.insertTreeNode(array, mid + 1, end);

    return root;
  }

  buildTree(array) {
    const sortedArray = sortArray(array);

    return this.#insertTreeNode(sortedArray, 0, sortedArray.length - 1);
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
