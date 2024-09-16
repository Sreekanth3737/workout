// traversal from a given graph
// This class represents a
// directed graph using adjacency
// list representation

// Start at vertex 0, visit 0.
// From 0, go to 1, visit 1.
// From 1, go to 2, visit 2.
// From 2, go to 3, visit 3.

// [
//     [1, 2],   // Vertex 0 has edges to vertices 1 and 2
//     [2],      // Vertex 1 has an edge to vertex 2
//     [0, 3],   // Vertex 2 has edges to vertices 0 and 3
//     [3]       // Vertex 3 has a self-loop
//   ]

class Graph {
  constructor(vertex) {
    this.vertex = vertex;
    this.adjacencyList = Array.from({ length: vertex }, () => []);
  }

  addEdge(fromVertex, toVertex) {
    this.adjacencyList[fromVertex].push(toVertex);
  }
  DFSUtils(v, visited) {
    visited[v] = true;
    console.log(v + " ");
    for (const n of this.adjacencyList[v]) {
      if (!visited[n]) {
        this.DFSUtils(n, visited);
      }
    }
  }

  DFS() {
    let visited = Array.from({ length: this.vertex }).fill(false);

    for (let i = 0; i < this.vertex; ++i) {
      if (visited[i] === false) {
        this.DFSUtils(i, visited);
      }
    }
  }
}

const graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);

graph.DFS();
