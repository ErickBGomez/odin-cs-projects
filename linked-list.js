import Node from "./node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  // Add last
  append(value) {
    const newNode = new Node(value);

    if (this.headNode == null) {
      this.headNode = newNode;
      this.tailNode = newNode;
      return;
    }

    // Add new node to current tail
    this.tailNode.nextNode = newNode;
    // Set tail to new node
    this.tailNode = newNode;
  }

  // Add first
  prepend(value) {
    const newNode = new Node(value);

    if (this.headNode == null) {
      this.headNode = newNode;
      this.tailNode = newNode;
      return;
    }

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    if (this.headNode == null) {
      return 0;
    }

    let temp = this.headNode;
    let counter = 0;

    while (temp != null) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  print() {
    if (this.headNode == null) {
      console.log("Empty");
      return;
    }

    let temp = this.headNode;

    while (temp != null) {
      // Print value
      process.stdout.write(`${temp.value}`);
      // Print arrow if next element is not null
      if (temp.nextNode != null) process.stdout.write(" -> ");

      temp = temp.nextNode;
    }

    process.stdout.write("\n");
  }
}

export default LinkedList;
