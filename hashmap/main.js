import HashMap from "./hashmap.js";
import LinkedList from "./linked-list.js";

const map = new HashMap();
const list = new LinkedList();

// console.log(map.hash("Erick"));
// console.log(map.hash("Erikc"));

map.set("My key", "This value");
// // Replace value
map.set("Carlos", "Smith");
map.set("Carlos", "Lopez");
// // Collision
map.set("Erick", "Gomez");
map.set("Erikc", "Hernandez");

map.set("key", "value");
console.log(map.remove("key"));
console.log(map.remove("key2"));
console.log(map.has("key"));

console.log(map.length());

map.clear();
console.log(map.length());
map.set("Erick", "Gomez");

// console.log(map.get("Erick"));
// console.log(map.get("a"));
// console.log(map.get("Carlos"));

// console.log(map.has("Erick"));
// console.log(map.has("yo"));

// list.insert("Carlos", "Smith");
// list.insert("Erick", "Gomez");
// list.insert("hola", "como estamos");
// list.insert("key", "value");

// list.print();

// list.delete("hola");
// list.print();

// list.delete("key");
// list.print();

// list.delete("Carlos");
// list.print();

// console.log(list.contains("Carlos"));
// console.log(list.contains("you"));
