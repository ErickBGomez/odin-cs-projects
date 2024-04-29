import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add last
  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // Add new node to current tail
    this.tail.nextNode = newNode;
    // Set tail to new node
    this.tail = newNode;
  }

  print() {
    if (this.head == null) {
      console.log("Empty");
      return;
    }

    let temp = this.head;

    while (temp != null) {
      // Print value
      process.stdout.write(`${temp.value}`);
      // Print arrow if next element is not null
      if (temp.nextNode != null) process.stdout.write(" -> ");

      temp = temp.nextNode;
    }
  }
}

export default LinkedList;
