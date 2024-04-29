import Node from "./node.js";

class LinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  head() {
    return this.#head;
  }

  tail() {
    return this.#tail;
  }

  // Add last
  append(value) {
    const newNode = new Node(value);

    if (this.#head == null) {
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

    if (this.#head == null) {
      this.#head = newNode;
      this.#tail = newNode;
      return;
    }

    newNode.nextNode = this.#head;
    this.#head = newNode;
  }

  size() {
    if (this.#head == null) {
      return 0;
    }

    let temp = this.#head;
    let counter = 0;

    while (temp != null) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  at(index) {
    if (this.#head == null) {
    }
  }

  print() {
    if (this.#head == null) {
      console.log("Empty");
      return;
    }

    let temp = this.#head;

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
