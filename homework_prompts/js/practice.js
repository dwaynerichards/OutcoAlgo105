const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const _graph = {};

function populateGraph(arr, obj) {
  for (const edge of _edges) {
    const [a, b] = edge;
    if (!(a in obj)) {
      console.log("not in set", a);
      obj[a] = [];
      obj[b] = [];
      obj[b].push(a);
      obj[a].push(b);
    }
  }
  obj[arr[0]] = new Set();
  const set = obj[arr[0]];
  set.add(arr[1]);
}
console.log(_graph);

const arr = [0, 2, 3, 5, 4];
const x = 1;
