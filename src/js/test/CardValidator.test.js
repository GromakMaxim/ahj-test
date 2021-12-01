import CardValidator from '../CardValidator';

// positive

test('111check legal card number', () => {
  const validator = new CardValidator();
  const testcase = '371449635398431';

  const actual = validator.isNumbers(testcase);
  console.log(actual);
  const expected = true;

  expect(actual)
    .toEqual(expected);
});

test('check luhn(given correct cardnumber)', () => {
  const validator = new CardValidator();
  const testcase = '375118435530560';

  const actual = validator.luhnAlgorithm(testcase);
  const expected = true;

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect visa)', () => {
  const validator = new CardValidator();
  const testcase = '4111111111111111';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'visa';

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect mastercard)', () => {
  const validator = new CardValidator();
  const testcase = '5555555555554444';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'mastercard';

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect discover)', () => {
  const validator = new CardValidator();
  const testcase = '6011111111111117';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'discover';

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect jcb)', () => {
  const validator = new CardValidator();
  const testcase = '3530111333300000';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'jcb';

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect diners)', () => {
  const validator = new CardValidator();
  const testcase = '30569309025904';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'diners';

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given correct cardnumber, expect amex)', () => {
  const validator = new CardValidator();
  const testcase = '375118435530560';

  const actual = validator.definePaymentSystem(testcase);
  const expected = 'amex';

  expect(actual)
    .toEqual(expected);
});

// negative

test('check a payment system(given number with letters, expect error msg)', () => {
  const validator = new CardValidator();
  const testcase = '67r44q635_9pp31';

  const actual = validator.definePaymentSystem(testcase);
  const expected = `unknown card number ${testcase}`;

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given number with letters, expect error msg)', () => {
  const validator = new CardValidator();
  const testcase = '67r44q635_9pp31';

  const actual = validator.isNumbers(testcase);
  const expected = false;

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given empty string, expect error msg)', () => {
  const validator = new CardValidator();
  const testcase = '';

  const actual = validator.definePaymentSystem(testcase);
  const expected = `unknown card number ${testcase}`;

  expect(actual)
    .toEqual(expected);
});

test('check a payment system(given 123, expect error msg)', () => {
  const validator = new CardValidator();
  const testcase = '';

  const actual = validator.definePaymentSystem(testcase);
  const expected = `unknown card number ${testcase}`;

  expect(actual)
    .toEqual(expected);
});
