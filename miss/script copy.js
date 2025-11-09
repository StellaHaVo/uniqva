var users = [
  { email: "user1@example.com", password: "password1" }, 
  { email: "user2@example.com", password: "password2" },
  { email: "user3@example.com", password: "password3" }
];

document.getElementById('sign-up').addEventListener("submit", function(event) {
  event.preventDefault();

  var signupEmail = document.getElementById('signupEmail').value;
  var signupPassword = document.getElementById('signupPassword').value;

  var existUser = users.find(function(user) {
      return user.email === signupEmail;
  });

  if (existUser) {
      alert("Tài khoản này đã tồn tại");
  } else {
      users.push({ email: signupEmail, password: signupPassword });
      alert("Bạn đã đăng ký thành công");
      window.location.href = "login.html";
  }
});
