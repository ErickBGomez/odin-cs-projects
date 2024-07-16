class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(from, to) {
    this.addVertex(from);
    this.addVertex(to);
    this.adjacencyList.get(from).push(to);
  }

  getNeighbors(node) {
    return this.adjacencyList.get(node);
  }
}

export default Graph;
