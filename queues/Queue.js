class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    this.length = 0;
    this.start = null;
    this.end = null;
  }
  enqueue(value) {
    let newNode = new node(value);
    if (!this.length) {
      this.start = newNode;
      this.end = newNode;
    } else if (this.length === 1) {
      this.start.next = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length += 1;
  }
  dequeue() {
    if (!this.length) {
      return null;
    } else if (this.length === 1) {
      this.start = null;
      this.end = null;
    } else {
      this.start = this.start.next;
    }
    this.length -= 1;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    // return this.length === 0 ?true:false;
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  front() {
    return this.start.value;
  }
  back() {
    return this.end.value;
  }
}
let queue = new Queue();
