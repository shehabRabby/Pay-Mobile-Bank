// login button functionality
document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //set value
    const mobileNumber = 19687058233;
    const pinNumber = 1234;

    //get mobile number by id and convert string to decilam
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const covertMobileNumberValue = parseInt(mobileNumberValue);

    //get pin number by id and convert string to decilam
    const pinNumberValue = document.getElementById("pin-number").value;
    const covertPinNumberValue = parseInt(pinNumberValue);

    //login check
    if (
      mobileNumber === covertMobileNumberValue &&
      pinNumber === covertPinNumberValue
    ) {
      //process of adding new page
      window.location.href = "./home.html";
    } else {
      alert("Invalid Credentails");
    }
    
  });
