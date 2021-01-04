class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    let current = this.root;
    if(!current) {
      this.root = node;
      return this;
    }
    while(current) {
      if(node.value === current.value) return undefined;
      if(node.value > current.value) {
        if(current.right) {
          current = current.right;
        } else {
          current.right = node;
          return this;
        }
      } else {
        if(current.left) {
          current = current.left;
        } else {
          current.left = node;
          return this;
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var tree = new BinarySearchTree();
