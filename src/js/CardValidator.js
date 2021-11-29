export default class CardValidator {
  isNumbers(cardnumber) {
    const reg = new RegExp('^[0-9]+$'); // only numbers allowed

    if (!cardnumber.match(reg)) {
      return false;
    }

    return true;
  }

  luhnAlgorithm(value) {
    value = value.replace(/\D/g, '');
    let nCheck = 0;
    let bEven = false;

    for (let n = value.length - 1; n >= 0; n--) {
      let nDigit = parseInt(value.charAt(n), 10);
      if (bEven && (nDigit *= 2) > 9) {
        nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) === 0;
  }

  definePaymentSystem(cardnumber) {
    if (cardnumber === null || cardnumber === undefined || cardnumber.length < 9) {
      throw new Error('invalid card number');
    }

    if (cardnumber.substr(0, 2) === '35') return 'jcb';
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
        return '';
    }
  }
}
