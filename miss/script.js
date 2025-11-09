var users = [
  { email: "user1@example.com", password: "password1" }, 
  { email: "user2@example.com", password: "password2" },
  { email: "user3@example.com", password: "password3" }
];

document.getElementById('login').addEventListener("submit", function(event) {
  event.preventDefault();

  var loginEmail = document.getElementById('loginEmail').value;
  var loginPassword = document.getElementById('loginPassword').value;

  var user = users.find(function(user) {
      return user.email === loginEmail && user.password === loginPassword;
  });

  if (user) {
      alert("Đăng nhập thành công");
      window.location.href = "3home.html";
  } else {
      alert("Sai mật khẩu hoặc email");
  }
});

