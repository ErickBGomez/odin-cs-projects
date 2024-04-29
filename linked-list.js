import Node from "./node.js";

class LinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  head() {
    return this.#head.value;
  }

  tail() {
    return this.#tail.value;
  }

  // Add last
  append(value) {
    const newNode = new Node(value);

    if (this.#head === null) {
      this.#head = newNode;
      this.#tail = newNode;
      return;
    }

    // Add new node to current tail
    this.#tail.nextNode = newNode;
    // Set tail to new node
    this.#tail = newNode;
  }

  // Add first
  prepend(value) {
    const newNode = new Node(value);

    if (this.#head === null) {
      this.#head = newNode;
      this.#tail = newNode;
      return;
    }

    newNode.nextNode = this.#head;
    this.#head = newNode;
  }

  // Extra: Add middle
  insertAt(value, index) {
    if (this.#head === null || index < 0 || index > this.size()) return;

    // Consider prepend and append to avoid repetition
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size()) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let counter = 0;
    let temp = this.#head;

    // Stop one node before index
    while (counter < index - 1) {
      counter++;
      temp = temp.nextNode;
    }

    // Set connections of nodes to insert new element
    newNode.nextNode = temp.nextNode;
    temp.nextNode = newNode;
  }

  size() {
    if (this.#head === null) {
      return 0;
    }

    let temp = this.#head;
    let counter = 0;

    while (temp !== null) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  at(index) {
    if (this.#head === null) {
      return -1;
    }

    let temp = this.#head;
    let position = 0;

    while (temp !== null) {
      if (position === index) return temp.value;
      temp = temp.nextNode;
      position++;
    }

    return -1;
  }

  // Remove last
  pop() {
    if (this.#head === null) return -1;

    let temp = this.#tail;
    let temp2 = this.#head;

    while (temp2.nextNode !== temp) {
      temp2 = temp2.nextNode;
    }

    temp2.nextNode = null;
    this.#tail = temp2;

    return temp.value;
  }

  // Extra: Remove middle
  removeAt(index) {
    if (this.#head === null || index < 0 || index >= this.size()) return -1;

    if (index === 0) {
      const popValue = this.#head.value;
      this.#head = this.#head.nextNode;
      return popValue;
    }
    if (index === this.size() - 1) {
      return this.pop();
    }

    let temp = this.#head;
    let temp2 = null;
    let counter = 0;

    while (counter < index) {
      counter++;
      temp2 = temp;
      temp = temp.nextNode;
    }

    temp2.nextNode = temp.nextNode;
    return temp.value;
  }

  contains(value) {
    if (this.#head === null) return false;

    let temp = this.#head;

    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }

    return false;
  }

  find(value) {
    if (this.#head === null) return -1;

    let temp = this.#head;
    let index = 0;

    while (temp !== null) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    if (this.#head === null) {
      console.log("Empty");
      return;
    }

    let temp = this.#head;

    while (temp !== null) {
      // Print value
      process.stdout.write(`( ${temp.value} ) -> `);

      temp = temp.nextNode;
    }

    process.stdout.write("null\n");
  }
}

export default LinkedList;
