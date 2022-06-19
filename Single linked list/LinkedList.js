class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const newNode = new node(value);

    if (this.length > 0) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.length) {
      return null;
    }
    let currentNode = this.head;
    let lastNode = this.head;
    while (currentNode.next) {
      lastNode = currentNode;
      currentNode = lastNode.next;
    }
    lastNode.next = null;
    this.length -= 1;
    this.tail = lastNode;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
  }
  shift() {
    if (!this.length) {
      return null;
    }
    let currentNode = this.head;
    let firstNode = currentNode.next;
    this.head = firstNode;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }
  }
  get(Index) {
    if (Index == null || Index > this.length) {
      return null;
    }
    let count = 0;
    let currentNode = this.head;
    while (count < Index) {
      currentNode = this.head.next;
      count++;
    }
    return currentNode;
  }
  set(Index, Vlaue) {
    let currentNode = this.get(Index);
    if (currentNode) {
      currentNode.value = Vlaue;
      return currentNode;
    } else {
      return null;
    }
  }
  insert(Index, value) {
    if (Index === 0) {
      this.unshift(value);
    } else if (Index === this.length) {
      this.push(value);
    } else {
      let prevNode = this.get(Index - 1);
      let newNode = new node(value);
      newNode.next = prevNode.next;
      if (prevNode) {
        prevNode.next = nextNode;
      }
    }
  }
  remove(Index) {
    if (Index === 0) {
      this.shift();
    } else if (Index === this.length) {
      this.pop();
    } else if (Index > this.length) {
      return null;
    }
    let prevNode = this.get(Index - 1);
    let removedNode = prevNode.next;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    this.length--;
    return removedNode;
  }
}

const list1 = new linkedList();
list1.push("ahmed");
