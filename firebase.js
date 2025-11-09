// firebase.js

//-Firebase mang chức năng lưu trữ dữ liệu dưới dạng key-value, khá tương tự với localStorage
//-Điểm khác biệt giữa localStorage và Firebase là localStorage thì chỉ các bạn truy cập được ở máy tính cá nhân
//Còn Firebase thì mọi người có thể Thêm/Sửa/Xóa/Cập nhật/đọc dữ liệu của các bạn

// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
//import này dùng để triển khai chức năng kết nối với firebase (firebase thực chất là một cơ sở dữ liệu)

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
//Import này dùng để gọi chức năng tạo người dùng bằng email và đăng nhập người dùng cũng bằng email

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// Đây là các phần import để gọi chức năng lưu trữ dữ liệu dưới dạng key-value theo từng bộ dữ liệu

// Add any other Firebase services you might need

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBQmGZtJ80JGeRhU5zwVAjU3eNdXD9VP7E",
  authDomain: "test-3108f.firebaseapp.com",
  projectId: "test-3108f",
  storageBucket: "test-3108f.appspot.com",
  messagingSenderId: "973558475486",
  appId: "1:973558475486:web:e790c25881ac360c06704f"
};

//Điền các thông tin bảo mật của firebase của riêng mình

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Thực hiện truy cập vào firebase dựa vào các thông tin bảo mật

// Initialize Firebase services (Auth, Firestore, etc.)
const auth = getAuth(app);
// Thực hiện truy cập chức năng đăng nhập đăng ký và chức năng kho dữ liệu

const db = getFirestore(app);
// Lấy ra kho dữ liệu của firebase mà các bạn vừa truy cập

// Export Firebase services to use in other parts of your app
// Export để đẩy các chức năng này public để các thư mục khác cũng có thể dùng được

export {
  app,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};


