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
let e = new Node(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverse = (head) => {
  let current = head;
  let next,
    pre = null;

  while (current !== null) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre;
};

console.log(reverse(a));
