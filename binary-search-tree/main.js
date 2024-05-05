import BinaryTree from "./binary-tree.js";
import sortAndRemoveDuplicted from "./util.js";

const tree = new BinaryTree();
const tree2 = new BinaryTree();

tree.buildTree([1, 2, 3, 4, 5, 6, 7]);
tree.prettyPrint();

// tree.levelOrderIterative((value) => console.log(value));
// tree.preOrder((value) => console.log(value));
console.log(tree.preOrder());
console.log(tree.inOrder());
