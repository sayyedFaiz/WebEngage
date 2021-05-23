// loading necessary customElements

var closeButton = document.getElementById("close-icon");
var container = document.querySelector(".container");
var showCoupon = document.querySelector(".show-coupon-card");

//copy button
function Copy(element) {
  const temp = document.body.appendChild(document.createElement("textarea"));
  temp.value = document.getElementById(element).innerHTML;
  temp.select();
  document.execCommand("copy");
  temp.remove();
}

//opening window
showCoupon.addEventListener("click", () => {
  container.style.height = "60%";
});

// closing the window
closeButton.addEventListener("click", () => {
  container.style.height = "0%";
});
