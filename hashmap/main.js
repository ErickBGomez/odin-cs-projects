import HashMap from "./hash/hashmap.js";
import HashSet from "./hash/hashset.js";

const hashMap = new HashMap();
const hashSet = new HashSet();

console.log("\n* Hashmap");

console.log("\n1) Hash");
console.log(hashMap.hash("Erick"));
console.log(hashMap.hash("Erikc"));
console.log(hashMap.hash("a"));

console.log("\n2) Set");
hashMap.set("My key", "This value");
hashMap.set("key", "value");
// Replace value
hashMap.set("Carlos", "Smith");
hashMap.set("Carlos", "Lopez");
// Collision
hashMap.set("Erick", "Gomez");
hashMap.set("Erikc", "Hernandez");

console.log("\n3) Get");
console.log(hashMap.get("Erick"));
console.log(hashMap.get("a"));
console.log(hashMap.get("Carlos"));

console.log("\n4) Has");
console.log(hashMap.has("Erick"));
console.log(hashMap.has("a"));

console.log("\n5) Remove");
console.log(hashMap.remove("key"));
console.log(hashMap.remove("key2"));
console.log(hashMap.has("key"));

console.log("\n6) Length");
console.log(hashMap.length());

console.log("\n7) Clear");
hashMap.clear();
console.log(hashMap.length());
hashMap.set("Erick", "Gomez");
hashMap.set("Carlos", "Smith");
hashMap.set("Jonathan", "Torres");

console.log("\n8) Keys");
console.log(hashMap.keys());

console.log("\n9) Values");
console.log(hashMap.values());

console.log("\n10) Entries");
console.log(hashMap.entries());

console.log("\n11) Resize");
hashMap.clear();
hashMap.set("a", "value");
hashMap.set("b", "value");
hashMap.set("c", "value");
hashMap.set("d", "value");
hashMap.set("e", "value");
hashMap.set("f", "value");
hashMap.set("g", "value");
hashMap.set("h", "value");
hashMap.set("i", "value");
hashMap.set("j", "value");
hashMap.set("k", "value");
hashMap.set("l", "value");
hashMap.set("m", "value");
hashMap.set("n", "value");
hashMap.set("o", "value");
hashMap.set("p", "value");
hashMap.set("q", "value");
hashMap.set("r", "value");
hashMap.set("s", "value");
hashMap.set("t", "value");
hashMap.set("u", "value");
hashMap.set("v", "value");
hashMap.set("w", "value");
hashMap.set("x", "value");
hashMap.set("y", "value");
hashMap.set("z", "value");
console.log(hashMap.length());

// Test HashSet

console.log("\n * HashSet:");

console.log("\n1) Hash");
console.log(hashSet.hash("Erick"));
console.log(hashSet.hash("Erikc"));
console.log(hashSet.hash("a"));

console.log("\n2) Set");
hashSet.set("My key");
hashSet.set("key");
// Skip duplicated keys
hashSet.set("Carlos");
hashSet.set("Carlos");
// Collision
hashSet.set("Erick");
hashSet.set("Erikc");

console.log("\n3) Get");
console.log(hashSet.get("Erick"));
console.log(hashSet.get("a"));
console.log(hashSet.get("Carlos"));

console.log("\n4) Has");
console.log(hashSet.has("Erick"));
console.log(hashSet.has("a"));

console.log("\n5) Remove");
console.log(hashSet.remove("key"));
console.log(hashSet.remove("key2"));
console.log(hashSet.has("key"));

console.log("\n6) Length");
console.log(hashSet.length());

console.log("\n7) Clear");
hashSet.clear();
console.log(hashSet.length());
hashSet.set("Erick", "Gomez");
hashSet.set("Carlos", "Smith");
hashSet.set("Jonathan", "Torres");

console.log("\n8) Keys");
console.log(hashSet.keys());

console.log("\n11) Resize");
hashSet.clear();
hashSet.set("a");
hashSet.set("b");
hashSet.set("c");
hashSet.set("d");
hashSet.set("e");
hashSet.set("f");
hashSet.set("g");
hashSet.set("h");
hashSet.set("i");
hashSet.set("j");
hashSet.set("k");
hashSet.set("l");
hashSet.set("m");
hashSet.set("n");
hashSet.set("o");
hashSet.set("p");
hashSet.set("q");
hashSet.set("r");
hashSet.set("s");
hashSet.set("t");
hashSet.set("u");
hashSet.set("v");
hashSet.set("w");
hashSet.set("x");
hashSet.set("y");
hashSet.set("z");
console.log(hashSet.length());
