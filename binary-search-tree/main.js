import BinaryTree from "./binary-tree.js";
import { randomArray, randomInt } from "./util.js";

const tree = new BinaryTree();

const array = randomArray(25, 0, 99);

// 1. Create tree
tree.buildTree(array);
tree.prettyPrint();

// 2. Confirm balanced tree
console.log(`Is balanced?: ${tree.isBalanced()}`);

// 3. Preorder, inorder, postorder
console.log("Preorder:");
tree.preOrder((value) => console.log(value));

console.log("Inorder:");
tree.inOrder((value) => console.log(value));

console.log("Postorder:");
tree.postOrder((value) => console.log(value));

// 4. Unbalance tree with more elements
for (let i = 0; i < randomInt(10, 20); i++) {
  tree.insert(randomInt(100, 200));
}

tree.prettyPrint();

// 5. Check tree balance (again)
console.log(`Is balanced?: ${tree.isBalanced()}`);

// 6. Balance tree
tree.rebalance();
tree.prettyPrint();

// 7. Confirm tree balance (again again)
console.log(`Is balanced?: ${tree.isBalanced()}`);

// 8. Preorder, inorder, postorder
console.log("Preorder:");
tree.preOrder((value) => console.log(value));

console.log("Inorder:");
tree.inOrder((value) => console.log(value));

console.log("Postorder:");
tree.postOrder((value) => console.log(value));
