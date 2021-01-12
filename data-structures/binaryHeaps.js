class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while(this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    const removed = this.values.pop();
    let index = 0;
    let leftChild = (2 * index) + 1;
    let rightChild = (2 * index) + 2;
    if(this.values.length > 0) {
      while(this.values[leftChild] > this.values[index] || this.values[rightChild] > this.values[index]) {
        
        if(this.values[leftChild] > this.values[rightChild]) {
          [this.values[index], this.values[leftChild]] = [this.values[leftChild], this.values[index]];
          index = leftChild;
        } else if(this.values[rightChild] > this.values[leftChild]) {
          [this.values[index], this.values[rightChild]] = [this.values[rightChild], this.values[index]];
          index = rightChild;
        } else if(this.values[leftChild] > this.values[index]) {
          [this.values[index], this.values[leftChild]] = [this.values[leftChild], this.values[index]];
          index = leftChild;
        } else if(this.values[rightChild] > this.values[index]) {
          [this.values[index], this.values[rightChild]] = [this.values[rightChild], this.values[index]];
          index = rightChild;
        }
        rightChild = (2 * index) + 2;
        leftChild = (2 * index) + 1;
      }
    }
    return removed;
  }
}