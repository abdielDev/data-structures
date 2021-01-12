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
  BFS() {
    const data = [],
         queue = [],
          node = this.root;
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data
  }
  DFSPreOrder() {
    const visited = [];
    let current = this.root;
    function helperFunction(node) {
      visited.push(node.value);
      if(node.left) helperFunction(node.left);
      if(node.right) helperFunction(node.right);
    }
    helperFunction(current);
    return visited;
  }
  DFSPostOrder() {
    const visited = [];
    let current = this.root;
    function helperFunction(node) {
      if(node.left) helperFunction(node.left);
      if(node.right) helperFunction(node.right);
      visited.push(node.value);
    }
    helperFunction(current);
    return visited;
  }
  DFSInOrder() {
    const visited = [];
    let current = this.root;
    function helperFunction(node) {
      if(node.left) helperFunction(node.left);
      visited.push(node.value);
      if(node.right) helperFunction(node.right);
    }
    helperFunction(current);
    return visited;
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

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);