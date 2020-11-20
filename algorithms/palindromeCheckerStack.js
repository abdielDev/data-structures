import Stack from '../stacks/stack.js';

export default function palindormeChecker(string) {
  const stack = new Stack();
  for(let i = 0; i < string.length; i++) {
    stack.push(string.charAt(i));
  }
  const joinedString = stack.toString().toLocaleLowerCase().split(',').join('');
  return joinedString === string;
}
