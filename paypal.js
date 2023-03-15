// get the references 
const form = document.getElementById("payment-form");
const cardNumber = document.getElementById("card-number");
const expiryDate = document.getElementById("expiry-date");
const cvv = document.getElementById("cvv");

const submirButton = document.getElementById("submit-button");


form.addEventListener("submit",event => {
    event.preventDefault();


submirButton.disabled = true;

const formData = {
    cardNumber: cardNumber.value,
    expiryDate: expiryDate.value,
    cvv: cvv.value,
}

if(!validateFormData(formData)){
    submirButton.disabled = false;
    return
}

fetch("/charge", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the server response
      if (data.success) {
        // Payment was successful
        alert("Payment successful!");
      } else {
        // Payment failed
        alert("Payment failed. Please try again.");
        submitButton.disabled = false;
      }
    })
    .catch((error) => {
      console.error(error);
      alert("An error occurred. Please try again.");
      submitButton.disabled = false;
    });
});


function validationformData (data) {
    if(!data.expiryDate || data.cardNumber.length != 16){
        alert("please enter a valid card");
        return false;
    }
    if(!data.expiryDate || data.expiryDate.length != 5){
        alert("please enter a valid expiry day in the formaty mm/yy");
        return false
    }
    if(!data.cvv || data.cvv.length !== 3) {
        alert("please enter a valid CVV");
        return false
    }
    return true;
}
