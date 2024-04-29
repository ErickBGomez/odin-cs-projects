import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.prepend(20);
list.append(5);
list.append(10);
list.prepend(25);
list.append(15);

list.toString();

console.log(`Size: ${list.size()}`);
console.log(`Head: ${list.head()}`);
console.log(`Tail: ${list.tail()}`);

console.log(`Find element using index: ${list.at(2)}`);

console.log(`Removed: ${list.pop()}`);
console.log(`Tail: ${list.tail()}`);
list.toString();

console.log(`Contains 10?: ${list.contains(10)}`);
console.log(`Contains 12?: ${list.contains(12)}`);

console.log(`Find index element using value: ${list.find(5)}`);
