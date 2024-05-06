import Node from "./node.js";

class NodeHash extends Node {
  constructor(key, value) {
    super(key);
    this.value = value;
  }
}

export default NodeHash;
