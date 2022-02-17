let { print } = require("./link-print");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(7);

let aa = new Node("a");
let bb = new Node("b");
let cc = new Node("c");
let dd = new Node("d");

a.next = b;
b.next = c;
c.next = d;

aa.next = bb;
bb.next = cc;
cc.next = dd;

const zipper = (head, ahead) => {
  let current = head;
  let next;
  let temp;

  while (current !== null && ahead !== null) {
    if (current.next === null && ahead !== null) {
      current.next = ahead;
      break;
    }
    next = current.next;
    temp = ahead;
    ahead = ahead.next;
    current.next = temp;
    temp.next = next;
    current = temp.next;
  }

  print(head);
  return head;
};

console.log(zipper(aa, a));
