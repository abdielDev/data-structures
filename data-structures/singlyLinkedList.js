class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this
  }
  pop() {
    if(!this.length) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if(!this.length) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let count = 0;
    let node = this.head;
    while(count < index) {
      node = node.next;
      count++;
    }
    return node;
  }
  set(val, index) {
    const nodeFound = this.get(index);
    if(!nodeFound) return false;
    nodeFound.val = val;
    return true;
  }
  insert(val, index) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) !!this.push(val);
    if(index === 0) !!this.unshift(val);
    const preNode = this.get(index - 1);
    const newNode = new Node(val);
    const oldNextNodePreNode = preNode.next;
    preNode.next = newNode;
    newNode.next = oldNextNodePreNode;
    this.length++;
    return true;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === this.length - 1) return this.pop();
    if(index === 0) return this.shift();
    const preNode = this.get(index - 1);
    const removedNode = preNode.next;
    preNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse(){
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next;
    let prev = null;
    let node = this.tail;
    while(node) {
      next = node.next;
      node.next = prev;
      if(next) {
        next.prev = node;
      }
      prev = node;
      node = next;
    }
    return this;
  }
}
