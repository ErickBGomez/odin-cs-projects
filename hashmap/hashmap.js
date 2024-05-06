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

    const nodeFound = this.#buckets[index].getNode(key);
    return nodeFound.value;
  }

  has(key) {
    const index = this.hash(key);

    if (!this.#buckets[index]) return false;

    return this.#buckets[index].contains(key);
  }

  remove(key) {
    const index = this.hash(key);

    if (!this.#buckets[index]) return false;
  }
}

export default HashMap;
