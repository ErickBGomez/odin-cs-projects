import BinaryTree from "./binary-tree.js";
import sortAndRemoveDuplicted from "./util.js";

const tree = new BinaryTree();
const tree2 = new BinaryTree();

tree.buildTree([1, 2, 3, 4, 5, 6, 7]);
tree.prettyPrint();

console.log(tree.isBalanced());

tree.insert(10);
tree.insert(11);
tree.prettyPrint();
console.log(tree.isBalanced());
