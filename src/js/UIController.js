import CardValidator from './CardValidator';

export default class UIController {
  constructor() {
    this.cardvalidator = new CardValidator();
    this.addValidateButtonListener();
  }

  addValidateButtonListener() {
    const button = document.getElementById('submitform');

    button.addEventListener('click', (event) => {
      event.preventDefault();

      this.turnOffShadows();

      const input = document.getElementById('card_number')
        .value
        .trim();

      const paymentSystem = this.cardvalidator.definePaymentSystem(input);
      if (!(paymentSystem.substr(0, 7) === 'unknown')) {
        this.showPaymentSystem(paymentSystem);
        this.applyShadow(paymentSystem);
      }
    });
  }

  showPaymentSystem(msg) {
    const paymentSystem = document.getElementById('result_msg');
    paymentSystem.innerText = msg;
  }

  applyShadow(paymentSystem) {
    this.applyShadowsAll();

    let cardElement;

    // eslint-disable-next-line default-case
    switch (paymentSystem) {
      case 'amex':
        cardElement = document.getElementsByClassName('amex')[0];
        break;
      case 'diners':
        cardElement = document.getElementsByClassName('diners_club')[0];
        break;
      case 'discover':
        cardElement = document.getElementsByClassName('discover')[0];
        break;
      case 'jcb':
        cardElement = document.getElementsByClassName('jcb')[0];
        break;
      case 'visa':
        cardElement = document.getElementsByClassName('visa')[0];
        break;
      case 'mastercard':
        cardElement = document.getElementsByClassName('master')[0];
        break;
    }
    cardElement.classList.remove('shadow');
  }

  turnOffShadows() {
    const cards = document.getElementsByClassName('card');
    Array.from(cards)
      .forEach((elem) => elem.classList.remove('shadow'));
  }

  applyShadowsAll() {
    const cards = document.getElementsByClassName('card');
    Array.from(cards)
      .forEach((elem) => elem.classList.add('shadow'));
  }
}
