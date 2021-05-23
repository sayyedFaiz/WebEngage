// to evaluate query string
function getParameter() {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get("aayush");
}

//declaring variables
let radioChecked = document.getElementById(getParameter());
let radioButton = document.querySelectorAll('input[type="radio"]');
let submit = document.querySelector(".submit");

if (radioChecked) {
  //changing the radio property
  radioButton.forEach((button) => {
    if (radioChecked.value === button.value) {
      radioChecked.checked = true;
    } else if (radioChecked.value) {
      button.addEventListener("click", () => {
        radioChecked.checked = true;
      });
    }
  });
}

submit.addEventListener("click", () => {
  alert("response recorded");
});
