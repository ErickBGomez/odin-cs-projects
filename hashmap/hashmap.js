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
    const bucketIndex = this.hash(key);

    // Case 1: Same keys -> Overwrite value
    this.#buckets[bucketIndex] = { key, value };

    // Case 2: Different keys, same hash -> Avoid collision

    console.log(bucketIndex);
    console.log(this.#buckets);
  }
}

export default HashMap;
