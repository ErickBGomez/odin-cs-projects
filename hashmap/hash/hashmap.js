import Hash from "./hash.js";
import LinkedListHash from "../linked-list/linked-list-hash.js";

class HashMap extends Hash {
  constructor() {
    super();
  }

  // Hash method implementations:
  // Set: key and value
  set(key, value) {
    // Resize when map reached loadFactor threshold
    if (this.getOccupiedBuckets() / this.hashSize >= this.loadFactor)
      this.resize();

    const index = this.hash(key);

    // Case 0: Bucket is empty
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedListHash();
      this.buckets[index].insert(key, value);
    }

    // Case 1: Same keys -> Overwrite value
    else if (this.buckets[index].contains(key))
      this.buckets[index].replaceValue(key, value);
    // Case 2: Different keys, same hash -> Avoid collision
    else this.buckets[index].insert(key, value);
  }

  resize() {
    const previousEntries = this.entries();
    this.hashSize *= 2;
    this.clear();

    // Re-assign hashes
    previousEntries.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
  }

  // Hashmap methods:
  values() {
    const values = [];

    this.buckets.forEach((bucket) => {
      // Spread operator to add values from current linked list
      if (bucket) values.push(...bucket.getValues());
    });

    return values;
  }

  entries() {
    const entries = [];

    this.buckets.forEach((bucket) => {
      if (bucket) entries.push(...bucket.getKeyValuePairs());
    });

    return entries;
  }
}

export default HashMap;
