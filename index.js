import decimalToBinary from "./algorithms/decimalToBinary.js";
import baseConverter from "./algorithms/baseConverter.js";
import { hanoi, hanoiStack } from "./algorithms/hanoi.js";
import Queue from "./queues/queue.js";
import Deque from "./queues/deque.js";
import hotPotato from "./algorithms/hotPotato.js";
// import palindromeChecker from "./algorithms/palindromeChecker.js";
import palindromeCheckerStack from "./algorithms/palindromeCheckerStack.js";

// console.log(decimalToBinary(233));	//	11101001
// console.log(decimalToBinary(10));	//	1010
// console.log(decimalToBinary(1000));	//	1111101000

// console.log(baseConverter(100345,	2));	//	11000011111111001
// console.log(baseConverter(100345,	8));	//	303771
// console.log(baseConverter(100345,	16));	//	187F9
// console.log(baseConverter(100345,	35));	//	2BW0

// hanoiStack(7);
// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('John');
// queue.enqueue('Jack');
// console.log(queue.toString());
// queue.enqueue('Camila');
// console.log(queue.toString());	//	John,Jack,Camila
// console.log(queue.size());	//	outputs	3
// console.log(queue.isEmpty());	//	outputs	false
// queue.dequeue();	//	remove	John
// queue.dequeue();	//	remove	Jack
// console.log(queue.toString());	//	Camila
// console.log(queue.peek());

// const deque = new Deque();
// console.log(deque.isEmpty());
// deque.addBack('John');
// deque.addBack('Jack');
// console.log(deque.toString());
// deque.addBack('Camila');
// console.log(deque.toString());
// console.log(deque.size());
// console.log(deque.isEmpty());
// deque.removeFront();
// console.log(deque.toString());
// deque.removeBack();
// console.log(deque.toString());
// deque.addFront('Front');
// console.log(deque.toString());

// const	names	=	['John',	'Jack',	'Camila',	'Ingrid',	'Carl'];
// const	result	=	hotPotato(names,	7);
// result.eliminated.forEach(name	=>	{
// 		console.log(`${name}	was	eliminated	from	the	Hot	Potato	game.`);
// });
// console.log(`The	winner	is:	${result.winner}`);

// console.log('a',	palindromeChecker('a'));
// console.log('aa',	palindromeChecker('aa'));
// console.log('kayak',	palindromeChecker('kayak'));
// console.log('level',	palindromeChecker('level'));
// console.log('Was it a car or a cat I saw',	palindromeChecker('Was it a car or a cat I saw'));
// console.log('Step on no pets',	palindromeChecker('Step on no pets'));

console.log(palindromeCheckerStack('racecar'));