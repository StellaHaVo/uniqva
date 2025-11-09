
    // var users = [
    //   { username: "user1", password: "password1", }, 
    //   { username: "user2", password: "password2" },
    //   { username: "user3", password: "password3" }
    // ];



  document.getElementById('login').addEventListener("submit",function(event) {
    event.preventDefault();
  
    let user = JSON.parse(localStorage.getItem("user")); // kh tim voi user ma so sanh vs user tim dc trong lS
    // if (user == null) localStorage.setItem("user", JSON.stringify(users));
    // user = JSON.parse(localStorage.getItem("user"));
    console.log(user);


    var loginPassword = document.getElementById('loginPassword').value;
    var loginEmail = document.getElementById('loginEmail').value;

    // var foundUsers = users.find(function(user) {
      let foundUsers = user.email === loginEmail && user.password === loginPassword
    // });

    if (foundUsers) {
      alert("Bạn đã đăng nhập thành công.") // chào mừng ...?
      // localStorage.setItem("user", JSON.stringify(user));
      window.location.href="3home.html"
    }

    else {
      alert("Sai mật khẩu hoặc email. Xin vui lòng thử lại!")
    }
  });

    console.log('Email:', email);
    console.log('Password:', password);
