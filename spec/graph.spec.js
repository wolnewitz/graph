const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
const Graph = require('../graph');

chai.use(spies);

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

  describe('graph.removeVertex', () => {
    beforeEach(() => {
      graph = new Graph();
    })

    it('exists', () => {
      expect(graph.removeVertex).to.exist;
    });

    it("return 'No vertex found.' for vertex not in graph", () => {
      graph.addVertex(1);

      expect(graph.removeVertex(2)).to.equal('No vertex found.');
    });

    it("removes the vertex from vertices", () => {
      graph.addVertex(1);
      graph.addVertex(2);

      graph.removeVertex(2);

      expect(graph.vertices.includes(2)).to.equal(false);
    });

    it("removes the vertex from corresponding edges", () => {
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);
      graph.addVertex(4);
      graph.addEdge(4, 3);
      graph.addEdge(4, 2);

      graph.removeVertex(4);

      expect(graph.edgeList[3].length).to.equal(0);
      expect(graph.edgeList[2].length).to.equal(0);
    });
  })

  describe("depthFirstSearch", () => {
    beforeEach(() => {
      graph = new Graph();
    });

    it("return 'No vertex found.' for vertex not in graph", () => {
      graph.addVertex(1);

      expect(graph.removeVertex(2)).to.equal('No vertex found.');
    });

    it("works", () => {
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);
      graph.addVertex(4);
      graph.addVertex(5);
      graph.addVertex(6);
      graph.addVertex(7);
      graph.addEdge(1,2);
      graph.addEdge(1,3);
      graph.addEdge(4,2);
      graph.addEdge(4,1);
      graph.addEdge(5,1);
      const cb = () => {};
      const spy = chai.spy(cb);

      graph.depthFirstSearch(1, spy);

      expect(spy).to.have.been.called.exactly(5);
    })
  })
})
