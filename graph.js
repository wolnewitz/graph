const Graph = function() {
  this.edgeList = [];
  this.vertices = [];
};

Graph.prototype.addVertex = function(val) {
  this.vertices.push(val);
  this.edgeList[val] = [];
}

Graph.prototype.removeVertex = function() {
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.edgeList[vertex1].push(vertex2);
  this.edgeList[vertex2].push(vertex1);
}

module.exports = Graph
