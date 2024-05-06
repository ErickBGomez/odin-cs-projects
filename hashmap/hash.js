class HashMap {
  hashSize;
  buckets;
  loadFactor;

  constructor() {
    this.hashSize = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.hashSize);
  }

  // Methods to implement:
  set() {}
  resize() {}

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.hashSize;
  }

  get(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return "";

    // Get value of current linked list
    return this.buckets[index].getNode(key);
  }

  has(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return false;

    // Check if current linked list has node with same key
    return this.buckets[index].contains(key);
  }

  remove(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) return false;

    // Delete node from current linked list in selected bucket
    return Boolean(this.buckets[index].delete(key));
  }

  length() {
    let counter = 0;

    this.buckets.forEach((bucket) => {
      // Add size for each linked list with nodes
      if (bucket) counter += bucket.getSize();
    });

    return counter;
  }

  clear() {
    // Reset buckets
    this.buckets = new Array(this.hashSize);
  }

  keys() {
    const keys = [];

    this.buckets.forEach((bucket) => {
      // Spread operator to add keys from current linked list
      if (bucket) keys.push(...bucket.getKeys());
    });

    return keys;
  }

  getOccupiedBuckets() {
    // Length of bucket with elements
    return this.buckets.filter((bucket) => bucket).length;
  }
}

export default HashMap;
