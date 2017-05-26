const expect = require('chai').expect;
const Graph = require('../graph');

describe('graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  })

  it('should exist', () => {
    expect(graph).to.exist;
  });

  it('should have an addVertex method', () => {
    expect(graph.addVertex).to.exist;
  });

  it('should have an removeVertex method', () => {
    expect(graph.removeVertex).to.exist;
  });
})
