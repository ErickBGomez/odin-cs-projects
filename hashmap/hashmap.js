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
      console.log("Replace");
      this.#buckets[index].replaceValue(key, value);
      console.log(this.#buckets);
      return;
    }

    // Case 2: Different keys, same hash -> Avoid collision
  }
}

export default HashMap;
