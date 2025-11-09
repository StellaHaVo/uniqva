
    var users = [
      { username: "user1", password: "password1", }, 
      { username: "user2", password: "password2" },
      { username: "user3", password: "password3" }
    ];
  //sign-up
      document.getElementById('sign-up').addEventListener("submit",function(event) {
        event.preventDefault();
      var RegisPassword = document.getElementById('password').value;
      var RegisEmail = document.getElementById('email').value; //lay ra toan bo the chu khphai chi ndung cua the

      var existUser = users.find(function(user) {
        return user.email === RegisEmail && user.password === RegisPassword
      })
      if (existUser) {
        alert("Tài khoản này đã tồn tại")

      }
  
      else {
        console.log(JSON.stringify({email:RegisEmail,password:RegisPassword}))

        localStorage.setItem("user",  JSON.stringify({email:RegisEmail,password:RegisPassword})); 
        //luu vao lS (dc trcap boi everywhere) chu khphai bien => do no kh dong bo (cung 1 ben/file - 2 noi khac nh)
        alert("Bạn đã đăng ký thành công!")
        window.location.href = "2login.html"      }
    });

    console.log('Email:', email);
    console.log('Password:', password);


  
    function login() {
      window.location.href = "2login.html";
    }
