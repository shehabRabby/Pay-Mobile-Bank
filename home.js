const validPin = 1234;

//add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const addPin = parseInt(document.getElementById("add-pin").value);

    //Available Balance take dhorbo
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

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
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });




  

//Cashout feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById("withdraw-amount").value);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const accountNumber = document.getElementById("account-number2").value;
  const addPin = parseInt(document.getElementById("add-pin2").value);

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
  document.getElementById("available-balance").innerText =
    totalAvailableBalance;
});



// togolling
document
  .getElementById("add-money-toogle")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
  });



//cash out toggle
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
