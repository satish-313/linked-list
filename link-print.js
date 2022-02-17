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

const print = (head) => {
  let current = head;

  while (current !== null) {
    process.stdout.write(`${current.val} `);
    current = current.next;
  }
  process.stdout.write("\n");
};

module.exports.print = print;
