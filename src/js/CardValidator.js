export default class CardValidator {
  isNumbers(cardnumber) {
    const reg = new RegExp('^[0-9]+$'); // only numbers allowed
    if (cardnumber.match(reg)) return true;
    return false;
  }

  luhnAlgorithm(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    value = value.replace(/\D/g, '');

    for (let n = value.length - 1; n >= 0; n--) {
      const cDigit = value.charAt(n);
      nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) === 0;
  }

  definePaymentSystem(cardnumber) {
    if (cardnumber === null || cardnumber === undefined || cardnumber.length < 9
      || !this.isNumbers(cardnumber) || !this.luhnAlgorithm(cardnumber)) {
      return `unknown card number ${cardnumber}`;
    }

    if (cardnumber.substr(0, 2) === '35') return 'jcb';
    if (cardnumber.substr(0, 2) === '30') return 'diners';

    switch (cardnumber.substr(0, 1)) {
      case '2':
        return 'mir';
      case '3':
        return 'amex';
      case '4':
        return 'visa';
      case '5':
        return 'mastercard';
      case '6':
        return 'discover';
      default:
        return `unknown card number ${cardnumber}`;
    }
  }
}
