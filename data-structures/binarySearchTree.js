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
  contains(value) {
    if(!this.root) return false;
    let current = this.root;
    while(true) {
      if(current.value === value) return true;
      if(value > current.value) {
        if(current.right) {
          current = current.right;
        } else {
          return false;
        }
      } else {
        if(current.left) {
          current = current.left;
        } else {
          return false;
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
