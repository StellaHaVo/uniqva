// auth.js

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

//Gọi ra các chức năng đăng ký và đăng nhập của firebase.

// Sign-up function
function signUp(email, password) {
  //Tạo tài khoản đăng nhập
  createUserWithEmailAndPassword(auth, email, password)
  //viethq00@gmail.com => then
  //viethq00.gmail.com => catch
    .then((userCredential) => {
      //Chú thích: userCredential là dữ liệu trả về khi API được gọi
      //Có thể đặt tên là bất cứ gì cũng được, nhưng tên đó luôn mang ý nghĩa là dữ liệu trả về khi gọi API (giống biến của map)
      //Khối lệnh .then được gọi đến khi mà tạo người dùng thành công, sau đó các khối lệnh bên trong này được gọi
      // Signed up successfully
      const user = userCredential.user;
      //Để lấy ra thông tin của người dùng vừa được tạo, sử dụng câu lệnh ở trên 
      alert("Sign-up successful! Welcome, " + user.email);
    })
    .catch((error) => {
      // Sign-up failed
      //Khối lệnh .catch được gọi đến khi mà tạo người dùng thất bại, sau đó các khối lệnh bên trong này được gọi
      alert("Sign-up failed: " + error.message);
    });
}

// Sign-in function
function signIn(email, password) {
  //Tương tự với phần đăng ký, chỉ khác là mình thực hiện nhập email và password để đăng nhập
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      //Kiểm tra trên hệ thống đã có tài khoản chưa
      //Nếu cả email và password đều tồn tại và trùng khớp, thì sẽ thành công
      const user = userCredential.user;
      alert("Sign-in successful! Welcome back, " + user.email);
      window.location.href = "3home.html"
    })
    .catch((error) => {
      // Sign-in failed
      alert("Sign-in failed: " + error.message);
    });
}

// Export the functions
//Export để chức năng này có thể được sử dụng ở các phần code khác
//Chỉ export TÊN HÀM
export { signUp, signIn };
