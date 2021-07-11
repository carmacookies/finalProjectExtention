// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function sendToCalc() {
  let tempName = document.getElementById("name").value;
  let tempEmail = document.getElementById("email").value;
  sessionStorage.setItem("name", tempName);
  sessionStorage.setItem("email", tempEmail);
}
