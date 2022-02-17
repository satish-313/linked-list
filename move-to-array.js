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

const cpToArr = (head) => {
  let current = head;
  const arr = [];

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
};

console.log(cpToArr(a));
