export enum KeyPadInput {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  ZERO = 0,
  POINT = '.',
  PLUS = '+',
  MINUS = '-',
  MULTIPLY = '*',
  DIVIDE = '-'
}

export const isOperand = (input: KeyPadInput | undefined): boolean => input === undefined ? false : [KeyPadInput.PLUS, KeyPadInput.MINUS, KeyPadInput.MULTIPLY, KeyPadInput.DIVIDE].includes(input)
export const isNumber = (input: KeyPadInput | undefined): boolean => input === undefined ? false : [KeyPadInput.ONE, KeyPadInput.TWO, KeyPadInput.THREE, KeyPadInput.FOUR, KeyPadInput.FIVE, KeyPadInput.SIX, KeyPadInput.SEVEN, KeyPadInput.EIGHT, KeyPadInput.NINE, KeyPadInput.ZERO].includes(input)

export const trimmable = (stack: KeyPadInput[]):boolean =>
  stack.length === 1 && stack[stack.length-1] === KeyPadInput.ZERO ||
  stack[stack.length-1] === KeyPadInput.ZERO && isOperand(stack[stack.length-2])

export const evaluable = (stack: KeyPadInput[]): boolean => !isOperand(stack.at(-1))

export const evaluate = (stack: KeyPadInput[]):number => {
  if(evaluable(stack)) return eval(stack.join(''))
  else return evaluate(stack.slice(0, -1))
}

export const toDisplayString = (inputStack: KeyPadInput[]): string => {
  if (inputStack.length === 0) {
    return '0.0';
  }

  let currentNumber = '';
  const displayStack: string[] = [];

  const formatIntegerPart = (number: string): string => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  inputStack.forEach((input) => {
    if (typeof input === 'number') {
      currentNumber += input.toString();
    } else if (input === KeyPadInput.POINT) {
      currentNumber += '.';
    } else {
      // received operand, add thousand separator to current number and push to display stack
      if (currentNumber !== '') {
        const parts = currentNumber.split('.');
        const formattedIntegerPart = formatIntegerPart(parts[0]);
        const formattedNumber = parts.length === 2 ? `${formattedIntegerPart}.${parts[1]}` : formattedIntegerPart;
        displayStack.push(formattedNumber);
        currentNumber = '';
      }
      // push the operand to display stack
      displayStack.push(input);
    }
  });

  if (currentNumber !== '') {
    const parts = currentNumber.split('.');
    const formattedIntegerPart = formatIntegerPart(parts[0]);
    const formattedNumber = parts.length === 2 ? `${formattedIntegerPart}.${parts[1]}` : formattedIntegerPart;
    displayStack.push(formattedNumber);
  }

  return displayStack.join(' ');
}