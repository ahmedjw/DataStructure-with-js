class node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    let newNode = new node(value);
    if (!this.length) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.length++;
    this.tail = newNode;
  }
  pop() {
    if (!this.length) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let currentNode = this.tail.prev;
      currentNode.next = null;
      this.length--;
      this.tail = currentNode;
    }
  }
  unshift(value) {
    let newNode = new node(value);
    if (!this.length) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      this.head = newNode;
      newNode.next = currentNode;
      currentNode.prev = newNode;
    }
    this.length += 1;
  }
  shift() {
    if (!this.length) {
      return null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
  }
  get(Index) {
    if (Index < 0 || Index >= this.length) {
      return null;
    } else {
      let count = 0;
      let currentNode = this.head;
      while (count < Index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
  }
  set(Index, Value) {
    if (Index < 0 || Index > this.length) {
      return null;
    } else {
      let currentNode = this.get(Index);
      currentNode.value = Value;
    }
  }
  insert(Index, Value) {
    if (Index < 0 || Index > this.length) {
      return null;
    } else if (this.length === 1) {
      if (Index === 0) {
        this.unshift(Value);
      } else {
        this.push(Value);
      }
    } else {
      let newNode = new node(Value);
      let currentNode = this.get(Index);
      newNode.prev = currentNode.prev;
      currentNode.prev = newNode;
      newNode.next = currentNode;
    }
  }
  remove(Index) {
    if (Index < 0 || Index > this.length) {
      return null;
    } else if (this.length === 1) {
      this.pop();
    } else {
      let currentNode = this.get(Index);
      let prevNode = currentNode.prev;
      let nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
    }
  }
}
let list2 = new doubleLinkedList();
