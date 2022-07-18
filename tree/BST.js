class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  Insert(val) {
    if (this.root === null) {
      this.root = new node(val);
    } else {
      let current = this.root;
      while (true) {
        if (current.value === val) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = new node(val);
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = new node(val);
          }
          current = current.right;
        }
      }
    }
  }
}
let tree = new Tree();
tree.Insert(5);
tree.Insert(3);
tree.Insert(8);
tree.Insert(4);
tree.Insert(9);
console.log("cuurent tree ", tree);
