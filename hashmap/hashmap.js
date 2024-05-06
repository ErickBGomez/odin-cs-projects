import LinkedList from "./linked-list.js";

class HashMap {
  #hashSize = 16;
  #buckets;
  #capacity;

  constructor() {
    this.#buckets = new Array(this.#hashSize);
    this.#capacity = this.#buckets.length;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.#hashSize;
  }

  set(key, value) {
    // Check resizing buckets later
    const index = this.hash(key);

    // Case 0: Bucket is empty
    if (!this.#buckets[index]) {
      this.#buckets[index] = new LinkedList();
      this.#buckets[index].insert(key, value);
      console.log(this.#buckets);
      return;
    }

    // Case 1: Same keys -> Overwrite value
    if (this.#buckets[index].contains(key)) {
      this.#buckets[index].replaceValue(key, value);
      console.log(this.#buckets);
      return;
    }

    // Case 2: Different keys, same hash -> Avoid collision
    if (this.#buckets[index]) {
      this.#buckets[index].insert(key, value);
      console.log(this.#buckets);
      return;
    }
  }

  get(key) {
    const index = this.hash(key);

    if (!this.#buckets[index]) return "";

    // Get value of current linked list
    const nodeFound = this.#buckets[index].getNode(key);
    return nodeFound.value;
  }

  has(key) {
    const index = this.hash(key);

    if (!this.#buckets[index]) return false;

    // Check if current linked list has node with same key
    return this.#buckets[index].contains(key);
  }

  remove(key) {
    const index = this.hash(key);

    if (!this.#buckets[index]) return false;

    // Delete node from current linked list in selected bucket
    const deletedNode = this.#buckets[index].delete(key);
    return Boolean(deletedNode);
  }

  length() {
    let counter = 0;

    this.#buckets.forEach((bucket) => {
      // Add size for each linked list with nodes
      if (bucket) counter += bucket.getSize();
    });

    return counter;
  }

  clear() {
    // Reset buckets
    this.#buckets = new Array(this.#hashSize);
  }
}

export default HashMap;
