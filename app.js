const billAmount = document.querySelector('#billamount');
const amountRecieved = document.querySelector('#amountRecieved');
const checkButton = document.querySelector('#check-button');
const errorMessage = document.querySelector('#error-Message');
const totalNotes = document.querySelectorAll('.notes-num');

const notesAvail = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener('click', function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (amountRecieved.value >= billAmount.value) {
      let returnAmount = amountRecieved.value - billAmount.value;
      calculateChange(returnAmount);
    } else {
      showMessage('Aur paisa de ?');
    }
  } else {
    showMessage('Invalid Bill Amount');
  }
});

console.log(billAmount, 'value1');
console.log(amountRecieved, 'value2');

function calculateChange(returnAmount) {
  for (let i = 0; i < notesAvail.length; i++) {
    const numOfNotes = Math.trunc(returnAmount / notesAvail[i]);

    returnAmount %= notesAvail[i];
    totalNotes[i].innerText = numOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = 'none';
}

function showMessage(Message) {
  errorMessage.style.display = 'block';
  errorMessage.innerText = Message;
}
