const expect = require('chai').expect;
const Graph = require('../graph');

describe('graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  })

  it('exists', () => {
    expect(graph).to.exist;
  });

  describe('graph.addVertex', () => {
    it('exist', () => {
      expect(graph.addVertex).to.exist;
    });

    it('adds to vertices', () => {
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);
      graph.addVertex(4);
      expect(graph.vertices.length).to.equal(4);
    });

    it('adds an empty array to the edgeList at index of vertex', () => {
      graph.addVertex(1);
      graph.addVertex(2);

      expect(graph.edgeList[1]).to.be.an('array').that.has.lengthOf(0);
    });
  });

  describe('graph.removeVertex', () => {
    beforeEach(() => {
      graph = new Graph();
    })

    it('has an removeVertex method', () => {
      expect(graph.removeVertex).to.exist;
    });
  })

  describe('graph.addEdge', () => {
    beforeEach(() => {
      graph = new Graph();
    })

    it('exists', () => {
      expect(graph.addEdge).to.exist;
    });

    it('works', () => {
      graph.addVertex(1)
      graph.addVertex(2)
      graph.addVertex(3)
      graph.addVertex(4)

      graph.addEdge(1, 3)
      graph.addEdge(2, 4)
      graph.addEdge(2, 1)

      expect(graph.edgeList[1]).to.include(3);
      expect(graph.edgeList[2].length).to.equal(2);
      expect(graph.edgeList[2]).to.include(4, 1);
      expect(graph.edgeList[4]).to.include(2);
      expect(graph.edgeList[3]).to.include(1);
      expect(graph.edgeList[1].length).to.equal(2);
    });
  })
})
