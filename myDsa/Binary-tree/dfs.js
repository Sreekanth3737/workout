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

a.left = b;
a.right = c;
b.right = e;
b.left = d;
c.right = f;

const depthFirstSearchValues = (root) => {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};
const res = depthFirstSearchValues(a);
console.log(res);

const depthFirstSearchRecurssion = (root) => {
  if (!root) return [];
  const left = depthFirstSearchRecurssion(root.left);
  const right = depthFirstSearchRecurssion(root.right);
  return [root.val, ...left, ...right];
};

const result = depthFirstSearchRecurssion(a);
console.log(result);
