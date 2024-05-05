import BinaryTree from "./binary-tree.js";
import sortAndRemoveDuplicted from "./util.js";

const tree = new BinaryTree();
const tree2 = new BinaryTree();

tree.buildTree([1, 2, 3, 4, 5, 6, 7]);
tree.prettyPrint();

console.log("-------");
tree.deleteItem(7);
tree.prettyPrint();

console.log("-------");
tree.deleteItem(1);
tree.prettyPrint();

console.log("-------");
tree.deleteItem(2);
tree.prettyPrint();

console.log("-------");
tree.deleteItem(6);
tree.prettyPrint();

console.log("-------");
tree.deleteItem(4);
tree.prettyPrint();

// tree2.insert(5);
// tree2.insert(7);
// tree2.insert(2);

// tree2.prettyPrint();

// tree2.deleteItem(7);
// tree2.prettyPrint
