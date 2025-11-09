// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// function w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
// }

// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
// }

//searchbar
let items = {
  data: [ //đang ở dạng mảng
    {
      image: "https://glints.com/vn/blog/wp-content/uploads/2023/02/Su-giong-nhau-giua-PR-va-Marketing.jpg",
      post: "Truyền Thông - Marketing"
    },
  ],
};

localStorage.setItem("post", items)


const listOfPost = localStorage.getItem("post");
console.log(listOfPost)

// localStorage.removeItem("fruit")
//Xóa dữ liệu của trình duyệt theo key


const searchInput = document.getElementById("searchInput")
const searchResults = document.getElementById("searchResults")

// console.log("TÁC VỤ CHẠY NGAY LẬP TỨC")

// // setTimeout(() => {
// //     //CÁC THAO TÁC SẼ THỰC HIỆN
// // }, THỜI GIAN SAU BAO NHIÊU LÂU SẼ THỰC HIỆN TÁC VỤ)

// setTimeout(() => {
//     console.log("TÁC VỤ CHẠY SAU 5 GIÂY")
// }, 5000)

// //THAO TÁC NÀY SẼ THỰC HIỆN SAU MỘT KHOẢNG THỜI GIAN
// //TUY NHIÊN, CHỈ THỰC HIỆN 1 LẦN DUY NHẤT

// //ĐỂ THỰC HIỆN TÁC VỤ HẸN GIỜ SAU MỘT KHOẢNG THỜI GIAN NHƯNG MÀ LẶP 
// //LẠI NHIỀU LẦN, THÌ DÙNG setInterval

// setInterval(() => {
//     console.log("HỌC JSA LÚC 19:30 MỖI THỨ 6 HÀNG TUẦN")
// }, 3000)

function search() {
    const searchText = searchInput.value.toLowerCase();
    //Lấy được giá trị nhập trong ô input 
    // => đưa gtri mình nhập và mình tìm cùng 1 kiểu => lúc ấy nó mới ra => kí tự có phân biệt in hoa/thường app!=App
    //toLowerCase >< toUpperCase (in thường hoặc in HOA)

    for(let i = 0; i < items.length; i++) {
        const item = items[i].toLowerCase();
        if(item.includes(searchText)) {
            //item.includes mang ý nghĩa kiểm tra xem cái chuỗi searchText có nằm trong chuỗi item hay không
            //VD: searchText = "App" và item = "Apple" => kết sẽ trả về true
            //kí tự có phân biệt in hoa/thường app!=App
            const li = document.createElement('li');
            li.textContent = items[i] //nội dung của thẻ li (bất kỳ vd như hình ảnh, chữ cái,...)
            searchResults.appendChild(li) //thẻ ul là dsach thường chứa li => tự tạo thẻ nhỏ li trong ul
        }
    }
}

searchInput.addEventListener('input', search)
//Tạo chức năng tìm kiếm ở input được chọn bằng cách bắt sự kiện thay đổi giá trị nhập vào ở input
// lấy ra input => gắn chức năng tìm kiếm vào ô input đc chọn, NHƯNG chức năng đc dùng khi có sự thay đổi gtri nhập vào input
//(dữ liệu btrong ô,function)
//nhìu ô input k sao vì đã có searchInput
