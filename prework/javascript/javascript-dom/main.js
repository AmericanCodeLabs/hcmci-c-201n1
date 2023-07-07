// DOM là viết tắt của Document Object Model

// Truy xuất/ chọn các thẻ HTML bằng JS => giá trị trả về chính là các DOM
/*
Lấy 1 phần tử bằng ID

document.getElementById($id) 
==> 1 phần tử 


*/
// let pageTitle = document.getElementById("pageTitle");
// console.log("pageTitle: " , pageTitle)
// console.dir(pageTitle)

// // Lấy nhiều phần tử có cùng tag name
// // document.getElementsByTagName($tagName)
// //  ==> danh sách các phần tử có cùng tagName

// const pTags = document.getElementsByTagName("p");
// console.log(pTags);

// for (let i = 0; i < pTags.length; i++) {
//   let pTag = pTags[i];
//   console.log(pTag)
// }

// Lấy nhiều phần tử có chứa cùng class name
// document.getElementsByClassName($className)
//  ==> danh sách các phần tử có chứa cùng className

const blueTags = document.getElementsByClassName("blue");
console.log(blueTags);

for (let i = 0; i < blueTags.length; i++) {
  let blueTag = blueTags[i];
  console.log(blueTag)
}