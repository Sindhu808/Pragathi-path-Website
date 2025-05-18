document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (username === "" || password === "") {
    errorMsg.textContent = "Please fill in both fields.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  // If validation passes
  errorMsg.textContent = "";
  alert(`Welcome, ${username}! (This is a demo login.)`);

  // You can redirect or call your backend here
  // window.location.href = "dashboard.html";
});
