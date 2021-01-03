class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if(!this.size) {
      this.last = newNode;
      this.first = newNode;
    }
    if(this.size >= 1) {
      const first = this.first;
      this.first = newNode;
      newNode.next = first;
    }
    return this.size++;
  }
  pop() {
    if(!this.size) return null;
    const temp = this.first;
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return temp.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}