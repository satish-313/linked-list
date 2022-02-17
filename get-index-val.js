class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
let d = new Node(7);
let e = new Node(9);
let f = new Node(11);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const getIndex = (head, target) => {
  let current = head;
  let index = 0;

  while (current !== null) {
    if (index === target) return current.val;
    index += 1;
    current = current.next;
  }
  return null;
};

console.log(getIndex(a, 3)); // 7
console.log(getIndex(a, 10)); // -1
console.log(getIndex(a, 0)); // 1
