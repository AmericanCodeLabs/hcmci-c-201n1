/* 

alert
dùng để hiện 1 hộp thoại lên giao diện người dùng
alert("Hello world");
*/

// prompt 
// dùng để hiện 1 hộp thoại lên giao diện người dùng có thêm 1 input để người dùng nhập liệu và trả về 1 dữ liệu (chính là nội dung mà người dùng nhập)
// prompt("What is your name?");

// // console
// // hiển thị nội dung ra tab console của "browser dev tools"
// console.log("Hello world")
// console.error("Bug")
// console.warn("Warning")
// // advanced
// console.dir({
//   message: "Hello world"
// })


// // variables
// // 4 cách khai báo biến
// // var 
// var datName = "Đạt";
// var datAge = 18;
// console.log("before: ", datName);

// datName = "Đạt 1"
// console.log("after: ", datName);

// datAge = "19"
// console.log("datAge: ", datAge);


// // let 
// let khoiName = "Khôi";
// let khoiAge = 8;
// console.log("before: ", khoiAge);

// khoiAge = 26;
// console.log("after: ", khoiAge);

// // const 
// // không thay đổi được giá trị
// const sangName = "Sáng";
// console.log("Sang name: " , sangName)
// // sangName = "Sáng 1";

// // không cần khai báo từ khoá
// // ==> tự động khai báo theo var
// className = "201n1";
// console.log("Class name: " , className);


// // * Lưu ý: chỉ sử dụng "let", "const" để khai báo biến


//// data type
// string: "Đạt", "Khôi", "Sáng" ,"Hello world"
// number: 1, 3, 5 , 2.1 , 10.5
// boolean: true, false
// object: [], {}
// null, undefined


// // Example 1
// // Viết một đoạn JS để lấy thông tin userName và sau đó hiển thị ra console chữ "Hello $userName"

// let userName = prompt("Vui lòng nhập tên đăng nhập!");
// console.log("Hello ", userName);


// Comment
// Comment 1 dòng 
// syntax: // $codeWillBeCommented

// comment nhiều dòng
// syntax: /*   */

/*
  $blockCodeWillBeCommented
*/

// // operator: Toán tử

// // Toán tử gán (=)
// let a = 5;
// let b = 2;

// // toán tử số học (+, - , * , /, %, ...)
// console.log("a + b: ", a + b)
// console.log("a - b: ", a - b)
// console.log("a * b: ", a * b)
// console.log("a / b: ", a / b)
// console.log("a % b: ", a % b)

// // toán tử so sánh ==> luôn luôn trả về giá trị có kiểu dữ liệu là "boolean": true, false

// // so sáng hơn (>, <)
// console.log("a > b: ", a > b)
// console.log("a < b: ", a < b)

// // so sáng bằng
// console.log("a == b: ", a == b)

// // so sánh hơn hoặc bằng
// console.log("a >= b: ", a >= b)
// console.log("a <= b: ", a <= b)


// // advanced
// let number1 = 10;
// let number1String = "10";

// let number2 = 9;
// let number2String = "9";
// let number3 = 10;

// console.log("number1 == number1String: ", number1 == number1String)

// // so sánh cả giá trị và cả kiểu dữ liệu
// console.log("number1 === number1String: ", number1 === number1String)

// // toán tử phủ định (!)
// // trả về giá trị ngược so với giá trị nằm kế sau nó
// console.log(!true)
// console.log(!false)

// // toán tử không bằng: 
// // - không bằng về giá trị (!=)
// // - không bằng về giá trị và cả kiểu dữ liệu (!== )
// console.log("number1 != number2: ", number1 != number2)
// console.log("number1 !== number1String: ",number1 !== number2String)
// console.log("number1 !== number3: ",number1 !== number3)

// Câu lệnh điều kiện (if-else)
/*

  if(condition){

    // logic code if condition true

  }else{

    // logic code if condition else

  }


*/

// // Example 2 
// // Yêu cầu người dùng nhập userName. Nếu userName là "Đạt" thì hiển thị thông tin "Đăng nhập thành công", ngược lại hiển thị thông tin "Đăng nhập thất bại"

// let userName = prompt("Vui lòng nhập tên đăng nhập");
// let userNameStandard = userName.toLowerCase();
// console.log(userNameStandard);

// if (userNameStandard === "đạt") {
//   console.log("Đăng nhập thành công");
// } else {
//   console.error("Đăng nhập thất bại");
// }

// // Example 3
// // Yêu cầu người dùng nhập userName. Nếu userName là "Đạt" thì hiển thị thông tin "Đăng nhập thành công", ngược lại hiển thị THÊM MỘT LẦN NỮA HỘP THOẠI NHẬP USERNAME ĐỂ NGƯỜI DÙNG CÓ THÊM 1 CƠ HỘI NHẬP LẠI, NẾU VẪN KHÔNG THÀNH CÔNG THÌ HIỂN THỊ thông tin "Đăng nhập thất bại"

// let userName = prompt("Vui lòng nhập tên đăng nhập");
// let userNameStandard = userName.toLowerCase();
// console.log(userNameStandard);

// if (userNameStandard === "đạt") {
//   console.log("Đăng nhập thành công");
// } else {

//   userName = prompt("Vui lòng nhập lại tên đăng nhập");
//   userNameStandard = userName.toLowerCase();

//   if (userNameStandard === "đạt") {
//     console.log("Đăng nhập thành công");
//   } else {

//     console.error("Đăng nhập thất bại");

//   }

// }


// Câu lệnh điều kiện (if - else if - else  )
/*

  if(condition1){

    // logic code if condition1 true

  } else if(condition2){

    // logic code if condition2 true

  }else{

    // logic code if condition1 false and condition2 false

  }


*/

// // // Example 4
// // // Yêu cầu người dùng nhập userName. Nếu userName là "Đạt" thì hiển thị thông tin "Xin chào Đạt" CÒN NẾU userName LÀ Khôi THÌ HIỂN THỊ THÔNG TIN "Xin chào admin", CÁC TRƯỜNG HỢP CÒN LẠI THÌ HIỂN THỊ thông tin "Đăng nhập thất bại"



// let userName = prompt("Vui lòng nhập tên đăng nhập");
// let userNameStandard = userName.toLowerCase();
// console.log(userNameStandard);

// if (userNameStandard === "đạt") {

//   console.log("xin chào Đạt");

// } else if (userNameStandard === "khôi") {

//   console.log("xin chào admin");

// } else {

//   console.error("Đăng nhập thất bại");

// }


// Hàm - function
// Hàm là một khối code được đóng gói lại để sử dụng lại tránh việc lặp lại các đoạn code đã viết và hàm có thể trả về giá trị. Hàm được đặt tên và khi sử dụng chúng ta sẽ sử dụng tên hàm kèm với lời gọi hàm.

// Khai báo hàm
/*

function functionName(){
  // logic code || code block

  return $value
}

*/
// let nameDat = "Đạt"
// console.log("Hello ", nameDat);

// let nameKhoi = "Khôi"
// console.log("Hello ", nameKhoi);



// parameters
/*

function functionName($parameters){
  // logic code || code block

  return $value
}

*/

// function helloUser(userName) {
//   console.log("Hello ", userName);
// }

// // Lời gọi hàm
// let nameDat = "Đạt"
// let nameKhoi = "Khôi"

// helloUser(nameDat)
// helloUser(nameKhoi)

// // return
// function sum(number1, number2) {
//   let result = number1 + number2;
//   console.log(result);
//   return result;
// }

// let sumResult = sum(1, 2)
// console.log("return value: ", sumResult);


// loops: Vòng lặp
// Example 5:
// In ra 5 lần "Hello" với logic như sau: Cứ mỗi lần hello thì kèm thêm thứ tự của lần Hello đó
// Ex: Hello 1, Hello 2,..., Hello 5
// console.log("Hello ", 1)
// console.log("Hello ", 2)
// console.log("Hello ", 3)
// console.log("Hello ", 4)
// console.log("Hello ", 5)

// Example 6:
// In ra 1000 lần "Hello" với logic như sau: Cứ mỗi lần hello thì kèm thêm thứ tự của lần Hello đó
// Ex: Hello 1, Hello 2,..., Hello 6

// Vòng lặp for
/*

  for(khởi tạo; điều kiện lặp; hàm tăng giá trị biến đếm){
    // logic code lặp đi lặp lại theo 1 quy luật
  }

*/
// lặp logic code 1000 lần và ngay thời điểm ban đầu mình sẽ khởi tạo 1 biến count bắt đầu từ 0 và sẽ tăng 1 đơn vị mỗi lần lặp. vòng lặp sẽ dừng khi biến count này đếm đến 1000 ==> vòng lặp sẽ còn chạy khi nào count <= 1000
// for (let count = 1; count <= 10; count = count + 1) {
//   console.log("Hello ", count)
// }


// Vòng lặp while
// Chỉ quan tâm đến điều kiện lặp
// Example 6: 
// Cho phép user nhập userName cho đến khi nào userName có giá trị là Đạt thì hiển thị thông tin "Đăng nhập thành công"

/*
while(condition){
  // logic code 
  // cập nhật lại biến tăng
}

*/

// Using while to resolve example 5 
// let count = 1;

// while(count <= 10){

//   console.log("Hello world ", count);

//   count = count + 1;
// }

// Using while to resolve example 6

// let userNameIsValid = false;

// while(!userNameIsValid){
  
//   let userName = prompt("Vui lòng nhập tên đăng nhập!");

//   if(userName.toLowerCase() === 'đạt'){
//     console.log("Đăng nhập thành công");

//     userNameIsValid = true;
//   }
// }

// console.log("Hello Đạt");

// console.log("Hello Khôi");


//  DOM: Document Object Model