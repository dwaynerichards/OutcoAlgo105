import chalk from "chalk";
const { log } = console;

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const DFS = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = _defineSource(stack);
    _performOperation(current);
    _addNeighbors(current, stack);
  }

  function _defineSource(array) {
    const _current = array.pop();
    return _current;
  }
  function _performOperation(val) {
    log(val);
  }
  function _addNeighbors(val, array) {
    //iter though graph, push neighbors unto stack
    for (let neighbor of graph[val]) {
      array.push(neighbor);
    }
  }
};

DFS(graph, "a");

const BFS = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = _defineSource(queue);
    _performOperation(current);
    _addNeighbors(current, queue);
  }
  //sift will shift entire erray down rather than recognizing index, time complex vs space complezity considerations
  function _defineSource(array) {
    return array.shift();
  }

  function _performOperation(val) {
    log(val);
  }
  function _addNeighbors(val, array) {
    for (let neighbor of graph[val]) {
      array.push(neighbor);
    }
  }
};
BFS(graph, "a");

//DFS beause was are only following one path, not all paths
//start at source// continue to interate until once of sources's neighbors maches target
//if we meet end befoer mathing target return false
