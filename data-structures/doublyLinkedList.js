class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    const removedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }
  shift() {
    if(!this.head) return undefined;
    const removedNode = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index < 0 || index === this.length) return null;
    let count;
    let node;
    if(index <= Math.floor(this.length / 2)) {
      count = 0;
      node = this.head;
      while(count < index) {
        node = node.next;
        count++;
      }
    } else {
      count = this.length - 1;
      node = this.tail;
      while(count > index) {
        node = node.prev;
        count--;
      }
    }
    return node;
  }
}