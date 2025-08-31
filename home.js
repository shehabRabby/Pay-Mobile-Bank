
const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    console.log(accountNumber);
    const amount = parseInt(document.getElementById("add-amount").value);
    const addPin = parseInt(document.getElementById("add-pin").value);

    //Available Balance take dhorbo
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    //check account validation
    if (accountNumber.length <11) {
      alert("Please Enter Valid Account Number");
      return;
    }

    //check pin validation
    if(addPin !=validPin){
        alert('Inter Valid Pin Number');
        return;
    }


    //total korbo
    const totalAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });
