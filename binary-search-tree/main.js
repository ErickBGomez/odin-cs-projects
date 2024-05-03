import BinaryTree from "./binary-tree.js";
import sortAndRemoveDuplicted from "./util.js";

const tree = new BinaryTree();

// tree.buildTree([1, 2, 3, 4, 5, 6, 7]);
//tree.prettyPrint();

const array = [5, 4, 3, 2, 1];

console.log(sortAndRemoveDuplicted(array));
