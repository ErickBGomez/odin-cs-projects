import BinaryTree from "./binary-tree.js";
import sortAndRemoveDuplicted from "./util.js";

const tree = new BinaryTree();
const tree2 = new BinaryTree();

tree.buildTree([1, 3, 5, 7, 9, 11]);
tree.prettyPrint();

console.log(tree.isBalanced());

tree.insert(2);
tree.insert(6);
tree.insert(12);
tree.prettyPrint();
console.log(tree.isBalanced());

tree.rebalance();
tree.prettyPrint();
console.log(tree.isBalanced());
