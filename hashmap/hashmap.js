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

  set(key, value) {}
}

export default HashMap;
