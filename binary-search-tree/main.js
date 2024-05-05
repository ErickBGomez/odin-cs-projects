import BinaryTree from "./binary-tree.js";
import sortAndRemoveDuplicted from "./util.js";

const tree = new BinaryTree();

tree.buildTree([1, 2, 3, 4, 5, 6, 7]);
tree.prettyPrint();
console.log(tree.root);
