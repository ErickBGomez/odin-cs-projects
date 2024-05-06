import Node from "./node.js";

class LinkedList {
  head;

  constructor() {
    this.head = null;
  }

  insert(key, value) {
    const newNode = new Node(key, value);

    // Empty list
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Add node to end of list
    const temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
  }
}

export default LinkedList;
