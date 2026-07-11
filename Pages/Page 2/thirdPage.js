document.addEventListener("DOMContentLoaded", function () {
  // Function to show the clickable button and hide the loading state
  function showClickableButton() {
    document.getElementById("loader-content").style.display = "none";
    document.getElementById("ready-content").style.display = "block";
    document.getElementById("ready-content").classList.add("fade-in");
  }

  // Function to navigate to the romance page
  function navigateToSecondPage() {
    window.location.href = "../Page 3/forthPage.html";
  }

  // Call the showClickableButton function after 3 seconds
  setTimeout(showClickableButton, 3000);

  // Call the navigateToSecondPage function when the clickable button is clicked
  document
    .getElementById("enable")
    .addEventListener("click", navigateToSecondPage);
});