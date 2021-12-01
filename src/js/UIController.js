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

      const input = document.getElementById('card_number')
        .value
        .trim();

      const paymentSystem = this.cardvalidator.definePaymentSystem(input);
      this.showPaymentSystem(paymentSystem);
    });
  }

  showPaymentSystem(msg) {
    const paymentSystem = document.getElementById('result_msg');
    paymentSystem.innerText = msg;
  }
}
