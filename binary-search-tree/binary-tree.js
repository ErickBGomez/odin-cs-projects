import Node from "./node.js";
import sortAndRemoveDuplicted from "./util.js";

class BinaryTree {
  root;

  #buildTreeRecursive(array, start, end) {
    if (start > end) return null;

    const mid = Math.trunc((start + end) / 2);

    const node = new Node(array[mid]);

    node.left = this.#buildTreeRecursive(array, start, mid - 1);
    node.right = this.#buildTreeRecursive(array, mid + 1, end);

    return node;
  }

  buildTree(array) {
    const sortedArray = sortAndRemoveDuplicted(array);

    this.root = this.#buildTreeRecursive(
      sortedArray,
      0,
      sortedArray.length - 1
    );

    return this.root;
  }

  // Code provided by The Odin Project:
  // https://www.theodinproject.com/lessons/javascript-binary-search-trees
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  #insertRecursive(value, node) {
    if (!node) {
      node = new Node(value);
      return node;
    }

    if (value < node.value) {
      node.left = this.#insertRecursive(value, node.left);
    } else {
      node.right = this.#insertRecursive(value, node.right);
    }

    return node;
  }

  insert(value) {
    this.root = this.#insertRecursive(value, this.root);
  }
}

export default BinaryTree;
