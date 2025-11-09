
    var users = [
      { username: "user1", password: "password1" }, 
      { username: "user2", password: "password2" },
      { username: "user3", password: "password3" }
    ];


  document.getElementById('login').addEventListener("submit",function(event) {
    event.preventDefault();
  

    var loginPassword = document.getElementById('loginPassword').value;
    var loginEmail = document.getElementById('loginEmail').value;

    var bibifind = users.find(function(user) {
      return user.email === loginEmail && user.password === loginPassword
    });

    if (bibifind) {
      alert("ok")
      window.location.href="home.html"
    }

    else {
      alert("Sai mật khẩu hoặc email")
    }
  });

      document.getElementById('sign-up').addEventListener("submit",function(event) {
        event.preventDefault();
      var RegisPassword = document.getElementById('password').value;
      var RegisEmail = document.getElementById('email').value;

      var existUser = users.find(function(user) {
        return user.email === RegisEmail && user.password === RegisPassword
      })
      if (existUser) {
        alert("Tài khoản này đã tồn tại")
      }
  
      else {
        users.push ({email:RegisEmail,password:RegisPassword});
        alert("Bạn đã đăng ký thành công")
      }
    });

    console.log('Email:', email);
    console.log('Password:', password);

//     1. Ôn tập về HTML, CSS, Javascript và giời thiệu về công nghệ lưu trữ mã nguồn Github
// 2. Cấu trúc vòng lặp for, while và các kiểu dữ liệu không nguyên thủy (Array, Object)
// 3. Lưu trữ dữ liệu bằng Local Storage.
// 4.  Async/Await trong JS
// 5. Lập trình bất đồng bộ trong Javascript //

// // Javascript
// // HTML
// // CSS
// // Localstorage
// // API
// // Git
  

