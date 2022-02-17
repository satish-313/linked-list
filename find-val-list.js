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
let e = new Node(11);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const isVal = (head, target) => {
  let current = head;

  while (current !== null) {
    if (target === current.val) return true;
    current = current.next;
  }
  return false
};

console.log(isVal(a, 11)); // true
console.log(isVal(a, 6)); // false
