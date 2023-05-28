const setPinDiv = document.getElementById('setPin_div');
const setPinDivConfirm = document.getElementById('setPin_div_confirm');
const newPinInput = document.getElementById('new_pin');
const newPinConfirmInput = document.getElementById('new_pin_confirm');
const initialOkButton = document.querySelector('#setPin_div .ok_btn');
const confirmOkButton = document.querySelector('#setPin_div_confirm .ok_btn');

let userInput;
let PIN;
let confirmPin;

function checkInputNotEmpty() {
  // Enable or disable the initial "Ok" button based on input value
  if (newPinInput.value.trim() === '') {
    initialOkButton.disabled = true;
    initialOkButton.style.backgroundColor = 'grey';
  } else {
    initialOkButton.disabled = false;
    initialOkButton.style.backgroundColor = '';
  }

  // Enable or disable the confirm "Ok" button based on input value
  if (newPinConfirmInput.value.trim() === '') {
    confirmOkButton.disabled = true;
    confirmOkButton.style.backgroundColor = 'grey';
  } else {
    confirmOkButton.disabled = false;
    confirmOkButton.style.backgroundColor = '';
  }
}

function Welcome() {
  setPinDiv.style.display = 'block';

  newPinInput.addEventListener('input', checkInputNotEmpty);

  // Add event listener to the 'Ok' button for initial input
  initialOkButton.addEventListener('click', function(event) {
    event.preventDefault();
  
    // Get the value of the input field
    userInput = newPinInput.value;
    PIN = userInput;
  
    // Clear the input field
    newPinInput.value = '';
  
    // Change label name
    document.getElementById('pin_label').textContent = 'Confirm Pin';
  
    // Display the user input in the console
    console.log('User input:', userInput);
  
    // Switch to the confirm pin div
    setPinDiv.style.display = 'none';
    setPinDivConfirm.style.display = 'block';
  });
}

function ConfirmPin() {
  const mpesaMenuDiv = document.getElementById('mpesa_menu');
  const emptyBtnsDiv = document.getElementById('empty_btns');
  const emptyBtnsDivButtons = document.querySelectorAll('#empty_btns .menu_list');
  const allTransactionDiv = document.getElementById('all_transaction');

  newPinConfirmInput.addEventListener('input', checkInputNotEmpty);

  // Add event listener to the 'Ok' button for confirm input
  confirmOkButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the value of the input field
    confirmPin = newPinConfirmInput.value;

    // Clear the input field
    newPinConfirmInput.value = '';

    // Change label name
    document.getElementById('pin_label_confirm').textContent = 'Confirm Pin';

    // Display the user input in the console
    console.log('User input:', userInput);
    console.log('User input OLD:', PIN);
    console.log('User confirm pin:', confirmPin);

    if (PIN === confirmPin) {
      // PIN and confirmPin match, hide other divs and show mpesa_menu
      setPinDiv.style.display = 'none';
      setPinDivConfirm.style.display = 'none';
      mpesaMenuDiv.style.display = 'block';
    } else {
      // PIN and confirmPin don't match, reload the page
      location.reload();
    }
  });
}
// Function to handle menu button clicks
function handleMenuButtonClick(event) {
    const mpesaMenuDiv = document.getElementById('mpesa_menu');
    const emptyBtnsDiv = document.getElementById('empty_btns');
    const emptyBtnsDivButtons = document.querySelectorAll('#empty_btns .menu_list');
    const allTransactionDiv = document.getElementById('all_transaction');
  
    // Hide all divs
    setPinDiv.style.display = 'none';
    setPinDivConfirm.style.display = 'none';
    mpesaMenuDiv.style.display = 'none';
    emptyBtnsDiv.style.display = 'none';
    allTransactionDiv.style.display = 'none';
  
    // Get the clicked button
    const clickedButton = event.target;
  
    if (clickedButton.textContent === 'Send Money') {
      // Show 'all_transaction' div
      allTransactionDiv.style.display = 'block';
    } else if (clickedButton.textContent === 'Withdraw Cash') {
      // Show 'empty_btns' div
      emptyBtnsDiv.style.display = 'block';
    } else if (clickedButton.textContent === 'Buy Airtime') {
      // Show 'empty_btns' div
      emptyBtnsDiv.style.display = 'block';
      // Rename the first two buttons
      emptyBtnsDivButtons[0].textContent = 'My Phone';
      emptyBtnsDivButtons[1].textContent = 'Others';
    } else if (clickedButton.textContent === 'Lipa na M-PESA') {
      // Show 'empty_btns' div
      emptyBtnsDiv.style.display = 'block';
      // Rename the first two buttons
      emptyBtnsDivButtons[0].textContent = 'Pay Bill';
      emptyBtnsDivButtons[1].textContent = 'Buy Goods';
    } else if (clickedButton.textContent === 'Home') {
      // Show 'mpesa_menu' div
      mpesaMenuDiv.style.display = 'block';
    }
  }
  
  // Get the menu buttons
  const menuButtons = document.querySelectorAll('.menu_list');
  
  // Add event listener to each menu button
  menuButtons.forEach(function(button) {
    button.addEventListener('click', handleMenuButtonClick);
  });
  
  Welcome();
  ConfirmPin();
  checkInputNotEmpty();
  