class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.right = c;
a.left = b;
b.right = e;
b.left = d;
c.left = f;
c.right = g;

const breadthFirstSearchValues = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
};

const res = breadthFirstSearchValues(a);
console.log(res);

const collectLevelNodes = (root, level, result) => {
  if (!root) return;
  if (result.length === level) {
    result.push([]);
  }
  result[level].push(root.val);
  collectLevelNodes(root.left, level + 1, result);
  collectLevelNodes(root.right, level + 1, result);
};
const breadthFirstSearchRecurssion = (root) => {
  const result = [];
  collectLevelNodes(root, 0, result);
  return result.flat();
};
const result = breadthFirstSearchRecurssion(a);
console.log(result);
