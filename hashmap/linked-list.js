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
    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  contains(key) {
    if (!this.head) return false;

    let temp = this.head;

    // Find node with same key
    while (temp.next && temp.key !== key) {
      temp = temp.next;
    }

    return temp.key === key;
  }

  #getNode(key) {
    if (!this.head) return null;

    let temp = this.head;

    // Find node with same key
    while (temp.next && temp.key !== key) {
      temp = temp.next;
    }

    return temp;
  }

  replaceValue(key, newValue) {
    if (!this.head) return;

    let node = this.#getNode(key);
    node.value = newValue;
  }
}

export default LinkedList;
