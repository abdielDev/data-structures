import Stack from "../stacks/stack.js";

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';

  if(!(base	>=	2	&&	base	<=	36))	{
    return	'';
  }

  debugger
  while(number > 0) {

    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);

  }
  while(!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

export default baseConverter;