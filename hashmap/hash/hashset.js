import Hash from "./hash.js";
import LinkedList from "../linked-list/linked-list.js";

class HashSet extends Hash {
  constructor() {
    super();
  }

  // Hash methods implementations
  set(key) {
    // Resize when map reached loadFactor threshold
    if (this.getOccupiedBuckets() / this.hashSize >= this.loadFactor)
      this.resize();

    const index = this.hash(key);

    // Bucket is empty
    if (!this.buckets[index]) this.buckets[index] = new LinkedList();

    // Insert element to bucket (doesn't matter if bucket already has nodes or not)
    this.buckets[index].insert(key);
  }

  resize() {
    const previousKeys = this.keys();
    this.hashSize *= 2;
    this.clear();

    // Re-assign hashes
    previousKeys.forEach((key) => {
      this.set(key);
    });
  }
}

export default HashSet;
