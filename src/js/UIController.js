import CardValidator from './CardValidator';

export default class UIController {
  constructor() {
    this.cardvalidator = new CardValidator();
    this.addValidateButtonListener();
    console.log('UI Controller');
  }

  addValidateButtonListener() {
    const button = document.getElementById('submitform');

    button.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('click');
      const input = document.getElementById('card_number').value.trim();
      console.log(input);
      if (this.cardvalidator.isNumbers(input) && this.cardvalidator.luhnAlgorithm(input)) {
        const paymentSystem = this.cardvalidator.definePaymentSystem(input);
        this.showPaymentSystem(paymentSystem);
      }
    });
  }

  showPaymentSystem(msg) {
    const paymentSystem = document.getElementById('result_msg');
    paymentSystem.innerText = msg;
  }
}
