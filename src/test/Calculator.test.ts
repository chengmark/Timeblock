import { toDisplayString, KeyPadInput } from "../utils/CalculatorUtils";

const { 
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  ZERO,
  POINT,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE
} = KeyPadInput

describe('[Calculator] toDisplayString()', () => {
  test('empty input return 0.0', () => {
    expect(toDisplayString([])).toEqual("0.0")
  });  

  test('single integer', () => {
    expect(toDisplayString([ONE])).toEqual("1")
  })

  test('single decimal', () => {
    expect(toDisplayString([ONE, POINT, TWO])).toEqual("1.2")
  })

  test('single integer with point', () => {
    expect(toDisplayString([ONE, POINT])).toEqual("1.")
  })

  test('trailing zeros', () => {
    expect(toDisplayString([ONE, POINT, ONE, ZERO])).toEqual("1.10")
  })

  test('trailing zeros 2', () => {
    expect(toDisplayString([ONE, POINT, ONE, ZERO, ZERO])).toEqual("1.100")
  })

  test('long decimal', () => {
    expect(toDisplayString([ONE, POINT, ONE, ZERO, ZERO, ZERO, TWO])).toEqual("1.10002")
  })

  test('Normal: 2 + 3', () => {
    const inputStack:KeyPadInput[] = [TWO, PLUS, THREE]
    expect(toDisplayString(inputStack)).toEqual('2 + 3')
  })

  test('Decimal: 2.1 + 0', () => {
    const inputStack:KeyPadInput[] = [TWO, POINT, ONE, PLUS, ZERO]
    expect(toDisplayString(inputStack)).toEqual('2.1 + 0')
  })

  test('Multi Operand: 5 - 2 * 3 + 4', () => {
    const inputStack: KeyPadInput[] = [FIVE, MINUS, TWO, MULTIPLY, THREE, PLUS, FOUR];
    expect(toDisplayString(inputStack)).toEqual('5 - 2 * 3 + 4');
  });
  
  test('Decimal 2: 2. + 1.2', () => {
    const inputStack: KeyPadInput[] = [TWO, POINT, PLUS, ONE, POINT, TWO];
    expect(toDisplayString(inputStack)).toEqual('2. + 1.2');
  });

  test('Decimal 3: 0.1 + 0.23', () => {
    const inputStack: KeyPadInput[] = [ZERO, POINT, ONE, PLUS, ZERO, POINT, TWO, THREE];
    expect(toDisplayString(inputStack)).toEqual('0.1 + 0.23');
  })

  test('Large Number: 123456 + 0.12', () => {
    const inputStack: KeyPadInput[] = [ONE, TWO, THREE, FOUR, FIVE, SIX, PLUS, ZERO, POINT, ONE, TWO];
    expect(toDisplayString(inputStack)).toEqual('123,456 + 0.12');
  })

  test('Large Decimal Number: 8.005 + 3580.025', () => {
    const inputStack: KeyPadInput[] = [EIGHT, POINT, ZERO, ZERO, FIVE, PLUS, THREE, FIVE, EIGHT, ZERO, POINT, ZERO, TWO, FIVE];
    expect(toDisplayString(inputStack)).toEqual('8.005 + 3,580.025');
  })
})