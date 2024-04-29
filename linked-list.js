import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let temp = this.head;

    while (temp.next != null) temp = temp.nextNode;

    temp.nextNode = newNode;
  }

  print() {
    if (this.head == null) {
      console.log("Empty");
      return;
    }

    let temp = this.head;

    while (temp != null) {
      console.log(`${temp.value} -> `);
      temp = temp.nextNode;
    }
  }
}

export default LinkedList;
