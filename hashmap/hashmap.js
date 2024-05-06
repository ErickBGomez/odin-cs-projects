import LinkedList from "./linked-list.js";

class HashMap {
  #hashSize;
  #buckets;
  #loadFactor;

  constructor() {
    this.#hashSize = 16;
    this.#loadFactor = 0.75;
    this.#buckets = new Array(this.#hashSize);
  }

  #getOccupiedBuckets() {
    // Length of bucket with elements
    return this.#buckets.filter((bucket) => bucket).length;
  }

  #resize() {
    const previousEntries = this.entries();
    this.#hashSize *= 2;
    this.clear();

    // Re-assign hashes
    previousEntries.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
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
    // Resize when map reached loadFactor threshold
    if (this.#getOccupiedBuckets() / this.#hashSize >= this.#loadFactor)
      this.#resize();

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

  keys() {
    const keys = [];

    this.#buckets.forEach((bucket) => {
      // Spread operator to add keys from current linked list
      if (bucket) keys.push(...bucket.getKeys());
    });

    return keys;
  }

  values() {
    const values = [];

    this.#buckets.forEach((bucket) => {
      // Spread operator to add values from current linked list
      if (bucket) values.push(...bucket.getValues());
    });

    return values;
  }

  entries() {
    const entries = [];

    this.#buckets.forEach((bucket) => {
      if (bucket) entries.push(...bucket.getKeyValuePairs());
    });

    return entries;
  }
}

export default HashMap;
