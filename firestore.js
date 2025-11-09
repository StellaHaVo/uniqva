// firestore.js

import { db } from "./firebase.js"; //xem firebase
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

//!!!!!! LƯU Ý: TRƯỚC KHI DÙNG FIRESTORE, PHẢI VÀO FIRESTORE DATABASE TRÊN TRÌNH DUYỆT VÀ BẬT CHỨC NĂNG CHO PHÉP GHI DỮ LIỆU LÊN
//Sau đó, bấm sang tab Rule, tiếp theo chỉnh chữ false => true, sau đó bấm CTRL + S để lưu 

//Firestore là cơ sở dữ liệu lưu trữ các dữ liệu dưới dạng key-value
//Ngày trước thì các bạn đang ko có chỗ lưu trữ các dữ liệu, VD: Món ăn (Link hình ảnh, tên món ăn, giá tiền)
//Bây giờ, các bạn hoàn toàn có thể lưu trữ các dữ liệu này.
//Đối với dữ liệu sẽ có 4 thao tác chính => Thêm, Sửa, Xóa, Đọc

// Add a document to Firestore
async function addDocument(collectionName, docId, data) {
  //3 Tham số truyền vào
    // - Tên cơ sở dữ liệu
    // - ID riêng biệt cho dữ liệu cần được nhập vào
    // - Dữ liệu chi tiết cần nhập vào
  //Thêm dữ liệu
  //Gọi API trong một khối try - catch

  try {
    //Nếu các câu lệnh chạy trơn tru và không có lỗi gì, thì sẽ vẫn chạy ở trong khối try
    //try-catch cải tiến hơn so với then-catch ở chỗ nó có thể bắt lỗi ở nhiều vị trí hơn là chỉ với 1 API như then-catch
    await setDoc(doc(db, collectionName, docId), data); //pattern của await?
    alert("Document successfully written!");
  } catch (error) {
    //Nếu bất kì dòng lệnh nào ở khối try bị lỗi, chương trình sẽ chạy thẳng vào code trong catch luôn
    console.error("Error writing document:", error);
    alert("Error writing document: " + error.message);
  }
}

// Read a document from Firestore
async function readDocument(collectionName, docId) {
  //Đọc dữ liệu dựa theo một ID nhất định (1 dl duy nhẩt)
    //2 Tham số truyền vào
    // - Tên cơ sở dữ liệu
    // - ID riêng biệt cho dữ liệu cần được nhập vào
  const docRef = doc(db, collectionName, docId);
  //Tạo ra một giá trị tham thiếu đến dữ liệu mình muốn đọc theo ID
  try {
    const docSnap = await getDoc(docRef);
    // Lấy ra dữ liệu dựa vào giá trị tham chiếu.
    if (docSnap.exists()) {
      alert("Document data: " + JSON.stringify(docSnap.data()));
    } else {
      alert("No such document!");
    }
  } catch (error) {
    console.error("Error reading document:", error);
    alert("Error reading document: " + error.message);
  }
}

// List all documents in a Firestore collection
async function listAllDocuments(collectionName) {
  //Đọc toàn bộ danh sách dữ liệu
  //1 tham số truyền vào duy nhất => Tên cơ sở dữ liệu
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];
  querySnapshot.forEach((doc) => {
    // Push each document data and id to the array
    documents.push({ id: doc.id, ...doc.data() });
  });

  if (documents.length > 0) {
    console.log("Documents in collection:", documents);
    alert("Documents: " + JSON.stringify(documents));
  } else {
    alert("No documents found in the collection.");
  }
}

// Subscribe to real-time updates from a document ////////
function subscribeToDocument(collectionName, docId) {
  const docRef = doc(db, collectionName, docId);
  try {
    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        console.log("Current data: ", docSnapshot.data());
        alert("Real-time data update: " + JSON.stringify(docSnapshot.data()));
      } else {
        console.log("No such document!");
      }
    });
    return unsubscribe; // Use this function to stop listening
  } catch (error) {
    console.error("Error in real-time subscription:", error);
    alert("Error in real-time subscription: " + error.message);
  }
}

export { addDocument, readDocument, subscribeToDocument, listAllDocuments };
