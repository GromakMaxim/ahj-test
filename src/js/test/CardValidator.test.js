import CardValidator from '../CardValidator';

test('check legal card number', () => {
  const validator = new CardValidator();
  const testcase = '371449635398431';

  const actual = validator.isNumbers(testcase);
  const expected = true;

  expect(actual)
    .toEqual(expected);
});

test('check luhn(given correct cardnumber)', () => {
  const validator = new CardValidator();
  const testcase = '371449635398431';

  const actual = validator.luhnAlgorithm(testcase);
  const expected = true;

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect visa)', () => {
  const validator = new CardValidator();
  const testcase = '471449635398431';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'visa';

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect mastercard)', () => {
  const validator = new CardValidator();
  const testcase = '571449635398431';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'mastercard';

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect discover)', () => {
  const validator = new CardValidator();
  const testcase = '671449635398431';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'discover';

  expect(actual)
    .toEqual(expected);
});
