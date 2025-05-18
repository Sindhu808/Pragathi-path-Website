
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "" || password === "") {
        document.getElementById('error-message').innerText = "Please fill in both fields.";
    } else {
        // Here you could handle a successful login request
        alert("Login Successful!");
    }
});
