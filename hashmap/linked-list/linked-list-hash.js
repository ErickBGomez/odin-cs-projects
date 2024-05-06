import NodeHash from "./node-hash.js";
import LinkedList from "./linked-list.js";

class LinkedListHash extends LinkedList {
  constructor() {
    super();
  }

  // Override method: Include key and value
  insert(key, value) {
    const newNode = new NodeHash(key, value);

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

  // LinkedListHash unique methods:
  replaceValue(key, newValue) {
    if (!this.head) return;

    let node = this.getNode(key);
    node.value = newValue;
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

  getKeyValuePairs() {
    if (!this.head) return [];

    const pairs = [];
    let temp = this.head;

    while (temp) {
      pairs.push([temp.key, temp.value]);
      temp = temp.next;
    }

    return pairs;
  }
}

export default LinkedListHash;
