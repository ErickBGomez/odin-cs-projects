import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.prepend(20);
list.append(5);
list.append(10);
list.prepend(25);
list.append(15);

list.print();

console.log(`Size: ${list.size()}`);
console.log(`Head: ${list.head()}`);
console.log(`Tail: ${list.tail()}`);

console.log(`Element index: ${list.at(2)}`);

console.log(`Removed: ${list.pop()}`);
console.log(`Tail: ${list.tail()}`);
list.print();

console.log(`Contains 10?: ${list.contains(10)}`);
console.log(`Contains 12?: ${list.contains(12)}`);
