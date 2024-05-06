import HashMap from "./hashmap.js";

const map = new HashMap();

console.log(map.hash("Carlos"));
console.log(map.hash("Carla"));

map.set("My key", "This value");
map.set("Carlos", "Smith");
map.set("Carlos", "Lopez");
