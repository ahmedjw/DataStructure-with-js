class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.length = 0;
    this.last = null;
  }
  push(value) {
    let newNode = new node(value);
    if (!this.length) {
      this.last = newNode;
    } else {
      let currentNode = this.last;
      this.last = newNode;
      newNode.next = currentNode;
    }
    this.length++;
  }
  pop() {
    if (!this.length) {
      return null;
    } else {
      this.last = this.last.next;
      this.length--;
    }
  }
}
let stack = new Stack();
