console.log("l;,mao");
const phoneNumberInput = document.querySelector('input[type="number"]');

phoneNumberInput.addEventListener('invalid', function() {
  this.setCustomValidity(''); // remove default validation message
  if (!this.validity.valid) {
    this.setCustomValidity('This field is required.');
  }
});
