function showLoginPassword() {
    var password = document.getElementById("password");
    var eyeIcon = document.getElementById("login_eye-toggle");
    if (password.type === "password") {
        eyeIcon.classList.add('ri-eye-off-line')
        password.type = "text";
    } else {
        password.type = "password";
        eyeIcon.classList.remove('ri-eye-off-line')
    }
  }