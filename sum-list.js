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

a.next = b;
b.next = c;
c.next = d;

const listSum = (head) => {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum = sum + current.val;
    current = current.next;
  }

  return sum;
};

console.log(listSum(a));
