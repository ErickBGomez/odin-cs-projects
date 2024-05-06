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

    while (temp.next) temp = temp.next;

    temp.next = newNode;
  }

  contains(key) {
    if (!this.head) return false;

    let temp = this.head;

    // Find node with same key
    while (temp.next && temp.key !== key) temp = temp.next;

    return temp.key === key;
  }

  getNode(key) {
    if (!this.head) return null;

    let temp = this.head;

    // Find node with same key
    while (temp.next && temp.key !== key) temp = temp.next;

    return temp;
  }

  replaceValue(key, newValue) {
    if (!this.head) return;

    let node = this.getNode(key);
    node.value = newValue;
  }

  delete(key) {
    // Base case: empty list
    if (!this.head) return null;

    let temp = this.head;

    // Case 1: delete head node
    if (this.head.key === key) this.head = temp.next;
    else {
      let temp2 = null;

      while (temp.next && temp.key !== key) {
        temp2 = temp;
        temp = temp.next;
      }

      // Case 2: delete middle node
      if (temp.next) temp2.next = temp.next;
      // Case 3: delete last node
      else temp2.next = null;
    }

    return temp;
  }

  getSize() {
    if (!this.head) return 0;

    let counter = 0;
    let temp = this.head;

    while (temp) {
      counter++;
      temp = temp.next;
    }

    return counter;
  }

  getKeys() {
    if (!this.head) return [];

    const keys = [];
    let temp = this.head;

    while (temp) {
      keys.push(temp.key);
      temp = temp.next;
    }

    return keys;
  }

  getValues() {
    if (!this.head) return [];

    const values = [];
    let temp = this.head;

    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }

    return values;
  }

  // Utility methods
  print() {
    if (!this.head) return;

    let temp = this.head;

    while (temp) {
      process.stdout.write(`(k: ${temp.key}, v: ${temp.value}) -> `);
      temp = temp.next;
    }

    process.stdout.write("null\n");
  }
}

export default LinkedList;
