    // dummy user data
    // tạo mảng
    
    // document.getElementById("commentForm").addEventListener("submit", function(event) {
    //   event.preventDefault();
    // var name = document.getElementById("name").value;
    //   var comment = document.getElementById("comment").value;
    //   var div = document.createElement("div");
    //   div.textContent = name + ": " + comment;
    //   document.getElementById("displayComments").appendChild(div);
    //   document.getElementById("commentForm").reset();
    // });
    
    function myFunction(){
      let data = "";  let name = document.getElementById("userName").value
      let comment = document.getElementById("userComment").value
       
      data = "User name : "+name+"<br/>User comment : "+comment
       
      document.getElementById("data").innerHTML = data  // display data to paragraph
      }
//     var comment = [
//       { username: "user1", password: "password1" }, // 1 phần tử mảng, phần tử này gọi là đối tượng
//       { username: "user2", password: "password2" },
//       { username: "user3", password: "password3" }
//     ];

// // form login
//   document.getElementById('login').addEventListener("submit",function(event) {
//     event.preventDefault();
  
//     // Extracting values from inputs
//     // get value login
//     var loginPassword = document.getElementById('loginPassword').value;
//     var loginEmail = document.getElementById('loginEmail').value;

//     // find the user in the users' array
//     var bibifind = users.find(function(user) {
//       return user.email === loginEmail && user.password === loginPassword
//     });

//     // S1: Found
//     if (bibifind) {
//       alert("ok")
//       window.location.href="home.html"
//     }

//     // S2: Unfound
//     else {
//       alert("Wrong email or password idk")
//     }
//   });

// // form sign-up
//       document.getElementById('sign-up').addEventListener("submit",function(event) {
//         event.preventDefault();
//       // get value sign-up
//       var RegisPassword = document.getElementById('password').value;
//       var RegisEmail = document.getElementById('email').value;

//       // Check the user's existence if or if not be there
//       var existUser = users.find(function(user) {
//         return user.email === RegisEmail && user.password === RegisPassword
//       })
//       // S1: Plagiarism
//       if (existUser) {
//         alert("It existed haiz!")
//       }
  
//       // S2: Originality
//       else {
//         users.push ({email:RegisEmail,password:RegisPassword});
//         alert("Registration succeeded but you fail in life")
//       }
//     });

//     // Do something with the values, for example, log them to the console
//     console.log('Email:', email);
//     console.log('Password:', password);
  
//     // You can also add more JavaScript code here to handle form submission,
//     // such as validating the input or sending it to a server.
