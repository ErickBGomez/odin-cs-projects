import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.prepend(20);
list.append(5);
list.append(10);
list.prepend(25);
list.append(15);

list.print();

console.log(`Size: ${list.size()}`);
