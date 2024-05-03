import BinaryTree from "./binary-tree.js";
import sortArray from "./util.js";

const tree = new BinaryTree();

tree.buildTree([1, 2, 3, 4, 5, 6, 7]);
//tree.prettyPrint();

const array = [6, 5, 4, 3];
sortArray(array);

console.log(sortArray(array));
