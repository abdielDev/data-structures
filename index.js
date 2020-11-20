import decimalToBinary from "./algorithms/decimalToBinary.js";
import baseConverter from "./algorithms/baseConverter.js";
import { hanoi, hanoiStack } from "./algorithms/hanoi.js";
import Queue from "./queues/queue.js";

// console.log(decimalToBinary(233));	//	11101001
// console.log(decimalToBinary(10));	//	1010
// console.log(decimalToBinary(1000));	//	1111101000

// console.log(baseConverter(100345,	2));	//	11000011111111001
// console.log(baseConverter(100345,	8));	//	303771
// console.log(baseConverter(100345,	16));	//	187F9
// console.log(baseConverter(100345,	35));	//	2BW0

// hanoiStack(7);
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
queue.enqueue('Camila');
console.log(queue.toString());	//	John,Jack,Camila
console.log(queue.size());	//	outputs	3
console.log(queue.isEmpty());	//	outputs	false
queue.dequeue();	//	remove	John
queue.dequeue();	//	remove	Jack
console.log(queue.toString());	//	Camila
console.log(queue.peek());