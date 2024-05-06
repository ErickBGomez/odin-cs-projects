import HashMap from "./hashmap.js";
import LinkedList from "./linked-list.js";

const map = new HashMap();
const list = new LinkedList();

console.log(map.hash("Erick"));
console.log(map.hash("Erikc"));

map.set("My key", "This value");
// Replace value
map.set("Carlos", "Smith");
map.set("Carlos", "Lopez");
// Collision
map.set("Erick", "Gomez");
map.set("Erikc", "Hernandez");

// console.log(map.get("Erick"));
// console.log(map.get("a"));
// console.log(map.get("Carlos"));

console.log(map.has("Erick"));
console.log(map.has("yo"));

// list.insert("Carlos", "Smith");
// console.log(list.contains("Carlos"));
// console.log(list.contains("you"));
