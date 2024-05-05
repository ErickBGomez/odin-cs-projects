import Node from "./node.js";
import sortAndRemoveDuplicted from "./util.js";

class BinaryTree {
  root;

  #buildTreeRecursive(array, start, end) {
    if (start > end) return null;

    // Truncate to avoid decimal indexes
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
    // Base case: empty tree
    if (!node) {
      node = new Node(value);
      return node;
    }

    if (value < node.value) {
      // Insert left node
      node.left = this.#insertRecursive(value, node.left);
    } else {
      // Insert right node
      node.right = this.#insertRecursive(value, node.right);
    }

    return node;
  }

  insert(value) {
    this.root = this.#insertRecursive(value, this.root);
  }

  #minValue(node) {
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  #deleteRecursive(value, node) {
    // Base case: empty tree
    if (!node) return node;

    // Evaluate if value is less or greater than actual node
    if (value < node.value) {
      node.left = this.#deleteRecursive(value, node.left);
    } else if (value > node.value) {
      node.right = this.#deleteRecursive(value, node.right);
    } else {
      // If value == node.value, then node is found

      // Deletion cases:
      // Case 1: Leaf node (node with no children)
      if (!node.left && !node.right) return null;
      // Case 2: Node with only left child
      else if (!node.left) return node.right;
      // Case 3: Node with only right child
      else if (!node.right) return node.left;
      else {
        // Case 4: Node with both children: Find min value in the right subtree
        const minValue = this.#minValue(node.right);
        node.value = minValue;
        node.right = this.#deleteRecursive(minValue, node.right);
      }
    }

    return node;
  }

  deleteItem(value) {
    this.root = this.#deleteRecursive(value, this.root);
  }

  #findRecursive(value, node) {
    // Base case: Node found or node is null
    if (value === node.value || !node) return node;

    // If value is less than current node, go left
    if (value < node.value) return this.#findRecursive(value, node.left);
    // If value is greater than current node, go right
    return this.#findRecursive(value, node.right);
  }

  find(value) {
    return this.#findRecursive(value, this.root);
  }
}

export default BinaryTree;
