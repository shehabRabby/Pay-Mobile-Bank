const validPin = 1234;
const transactionData = [];

// function to get input value make it integer
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

//function to get id and give just value
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

//function to get input and give innerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

//function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

//function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const i of forms) {
    i.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//function toggle button background color
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const i of formBtns) {
    i.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    i.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}





//add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("add-amount");
    if(amount<=0){
      alert('Invalid amount')
      return;
    }


    const addPin = getInputValueNumber("add-pin");

    //Available Balance take dhorbo
    const availableBalance = getInnerText("available-balance");

    //check account validation
    if (accountNumber.length < 11) {
      alert("Please Enter Valid Account Number");
      return;
    }

    //check pin validation
    if (addPin !== validPin) {
      alert("Inter Valid Pin Number");
      return;
    }

    //total korbo
    const totalAvailableBalance = amount + availableBalance;
    setInnerText(totalAvailableBalance);

    const data = {
      name : 'Add Money',
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data)

  });





//Cashout feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = getInputValueNumber("withdraw-amount");
  const availableBalance = getInnerText("available-balance");
  if(amount<=0 || amount>availableBalance){
    alert('Invalid Balance')
    return;
  }
  const accountNumber = getInputValue("account-number2");
  const addPin = getInputValueNumber("add-pin2");

  //account number validation
  if (accountNumber.length < 11) {
    alert("Please Enter Valid Account Number");
    return;
  }
  //check pin validation
  if (addPin !== validPin) {
    alert("Inter Valid Pin Number");
    return;
  }

  //widthdraw
  const totalAvailableBalance = availableBalance - amount;
  setInnerText(totalAvailableBalance);

  const data = {
      name : 'Cashout',
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    
});




//transaction control pannel
document.getElementById('transaction-btn').addEventListener('click',function () {
  const transactionContainer = document.getElementById('transaction-container')
  transactionContainer.innerText = '';
  for(const data of transactionData){
    const div = document.createElement('div')
    div.innerHTML =`
    <div class="rounded-xl flex justify-between items-center bg-white h-[65px] p-3 mb-3">
                  <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                      <img src="assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-3">
                      <h1>${data.name}</h1>
                      <p>${data.date}</p>
                    </div>
                  </div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div> 
  `
  transactionContainer.appendChild(div);


  }
})





// togolling
document
  .getElementById("add-money-toogle")
  .addEventListener("click", function () {
    handleToggle("add-money-parent");
    handleButtonToggle("add-money-toogle");
  });

//cash out toggle
document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleButtonToggle("cash-out-btn");
});

// transfer-money
document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
  handleButtonToggle("transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleToggle("Get-bonus-parent");
  handleButtonToggle("bonus-btn");
});

//Pay-Bill
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle("Pay-bill-parent");
  handleButtonToggle("pay-bill-btn");
});

//Transaction
document.getElementById("transaction-btn").addEventListener("click", function () {
  handleToggle("Transaction-parent");
  handleButtonToggle("transaction-btn");
});
