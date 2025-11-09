import { listAllDocuments, readDocument } from "./firestore.js"; 
//Lấy chức năng liệt kê toàn bộ danh sách dữ liệu và chức năng đọc ra một dữ liệu duy nhất.

const productListElement = document.getElementById("productList");
//Tìm ra phần tử thẻ div có id là productList là danh sách sản phẩm


const productDetailElement = document.getElementById("productDetail");
//Tìm ra thẻ div để hiển thị chi tiết sản phẩm

const backButton = document.getElementById("backButton");
//Tìm ra thẻ button để thực hiện chức năng quay lại danh sách sản phẩm

// Detail product elements
const productDetailName = document.getElementById("productDetailName");
//Tìm ra thẻ để hiển thị dữ liệu tên chi tiết sản phẩm
const productDetailImage = document.getElementById("productDetailImage");
//Tìm ra thẻ để hiển thị dữ liệu ảnh chi tiết sản phẩm
const productDetailPrice = document.getElementById("productDetailPrice");
//Tìm ra thẻ để hiển thị dữ liệu giá chi tiết sản phẩm
const productDetailDescription = document.getElementById(
  "productDetailDescription"
);
//Tìm ra thẻ để hiển thị dữ liệu mô tả chi tiết sản phẩm

// Function to render products
function renderProducts(products) {
  //Hiển thị lên danh sách sản phẩm dưới dạng html
  //Tham số truyền vào chính là danh sách sản phẩm
  //Vì danh sách sản phẩm trả về sẽ là một mảng bao gồm nhiều tử, nên sẽ dùng hàm map   
    // để duyệt qua từng phần tử và tạo cấu trúc html để hiển thị 
  productListElement.innerHTML = products
    .map(
      //Lưu ý: Với mỗi sản phẩm được tạo cấu trúc html, nên thêm thuộc tính data-id 
      //để tạo ra một tên riêng biệt cho sản phẩm trên html

      (product) => `
        <div class="product-item" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
        </div>
    `
    )
    .join("");

  // Add click event listeners to product items
  //Lắng nghe sự kiện bấm vào hình ảnh của các sản phẩm
  // Tìm ra sản phẩm => Tạo sự kiện lắng nghe vào từng sản phẩm đó
  document.querySelectorAll(".product-item").forEach((productElement) => {
    //querySelectorAll sẽ tìm các phần tử html dựa trên class của nó
    //Cú pháp truyền vào (.Tên class)
    //Câu lệnh này có kết trả về là toàn bộ các phần tử tìm được theo giá trị truyền vào
    //Sau đó sử dụng forEach để duyệt qua từng sản phẩm, 
    //và gán chức năng nghe sự kiện bấm vào hình ảnh cho từng sản phẩm

    // attaches a click event listener to the selected element. 
    //When the button is clicked, the function inside addEventListener is executed, 

    productElement.addEventListener("click", async () => {
      //Lắng nghe sự kiện bấm vào sản phẩm
      //Khi mà bấm lên sản phẩm, mình sẽ thực hiện gọi hàm chức năng hiển thị chi tiết sản phẩm - fetchProductDetail
      const productId = productElement.getAttribute("data-id"); //Phương thức getAttribute() trả về giá trị của một thuộc tính của phần tử.
      //Lấy ra id của sản phẩm dựa theo thuộc tính data-id; 
      await fetchProductDetail(productId);
      //hàm nào có async ph dùng thêm await để gọi hàm
    });
  });
}

// Function to fetch and display product detail using readDocument
async function fetchProductDetail(productId) {
  //bất đồng bộ => Hàm có chức năng gọi đến một chương trình khác
  //khởi tạo async khi mà btrong có ít nhất 1 hàm có chức năng là gọi api đến 1 ctrinh khác (firebase)
  //khi mà hàm có chứa chức năng gọi api lên 1 ctrinh nào khác
  //Chức năng: Lấy dữ liệu từ firebase và truyền dữ liệu này vào format chi tiết màn hình trên html
  //Tham số truyền vào: id của dữ liệu
  try {
    const product = await readDocument("job-detail", productId); 
    //Truyền vào 2 tham só: tên bộ dữ liệu và id của dữ liệu (Giá trị tên gọi của dữ liệu)

    //Kết quả sẽ trả về dữ liệu theo id dưới dạng 1 object, 
    //và bây giờ việc của mình là lấy các dữ liệu đó truyền vào trong lõi của thẻ html mong muốn
    if (product) {
      // Display product detail
      productDetailName.textContent = product.name;
      //Truyền vào nội dung của thẻ với giá trị là tên của sản phẩm
      productDetailImage.src = product.image;
      //Truyền vào src của thẻ với giá trị là hình ảnh của sản phẩm
      productDetailPrice.textContent = `Price: ${product.price} vnđ`;
      productDetailDescription.textContent =
        product.description || "No description available.";

      // Hide product list and show product detail
      productListElement.style.display = "none";
      //Ẩn màn hình danh sách sản phẩm xuống
      productDetailElement.style.display = "block";
      //Hiển thị chi tiết sản phẩm lên

    }
  } catch (error) {
    console.error("Error fetching product details: ", error);
  }
}

// Fetch and render products from Firestore
async function fetchAndRenderProducts() {
  //Đây là hảm lấy danh sách dữ liệu ra từ firebase 
  //và truyền danh sách dữ liệu vào hàm hiển thị danh sách sản phẩm dưới dạng html
  try {
    const products = await listAllDocuments("job-list"); // Cần chú ý tên của bộ dữ liệu muốn lấy
    //Lấy ra danh sách dữ liệu trong bộ dữ liệu có tên là "job-list", 
    //dữ liệu này đang lưu trữ ở dạng Javascript Array and Object
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
}

//The try statement allows you to define a block of code to be tested for errors while it is being executed.
//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.


// //!!BUTTON CHƯA CÓ NÊN BỊ LỖI ĐÂY NÈ
// // Back to product list
// backButton.addEventListener("click", () => {
//   productDetailElement.style.display = "none";
//   //Ẩn màn hình chi tiết sản phẩm đi
//   productListElement.style.display = "flex";
//   //Hiển thị màn hình danh sách sản phẩm lên theo cấu trúc flex (Hiển thị theo thứ tự nhất định)
// });

// Call the function to fetch and display products
// Gọi hàm để thực thi các chức năng hiển thị sản phẩm dưới HTML
fetchAndRenderProducts();
