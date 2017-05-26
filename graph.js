const Graph = function() {
  this.edgeList = [];
  this.vertices = [];
};

Graph.prototype.addVertex = function(val) {
  this.vertices.push(val);
  this.edgeList[val] = [];
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.edgeList[vertex1].push(vertex2);
  this.edgeList[vertex2].push(vertex1);
}

Graph.prototype.removeVertex = function(vertex) {
  if (!this.vertices.includes(vertex)) { return 'No vertex found.' }

  const index = this.vertices.indexOf(vertex);

  this.vertices.splice(index, 1);

  this.edgeList[vertex].forEach((edge) => {
    var idxInEdge = this.edgeList[edge].indexOf(vertex);

    this.edgeList[edge].splice(idxInEdge, 1);
  });
}

Graph.prototype.depthFirstSearch = function(vertex, cb) {
  if (!this.vertices.includes(vertex)) { return 'No vertex found.' }

  var that = this;
  const visited = [];

  function traverseGraph(vertex, visited, cb) {
    visited[vertex] = true;
    if(that.edgeList[vertex]) { cb(vertex) }

    for(var i = 0; i < that.edgeList[vertex].length; i++) {
      if(!visited[that.edgeList[vertex][i]]) {
        traverseGraph(that.edgeList[vertex][i], visited, cb);
      }
    }
  }

  traverseGraph(vertex, visited, cb);
}


module.exports = Graph
