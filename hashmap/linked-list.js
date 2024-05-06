import Node from "./node.js";

class LinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  insert(key, value) {
    const newNode = new Node(key, value);

    // Empty list
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
      return;
    }

    // Add node to end of list
    this.#tail.next = newNode;
    this.#tail = newNode;
  }
}

export default LinkedList;
