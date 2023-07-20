// Object

// Syntax

// let dat = {} // object
// console.log(dat);

// thuộc tính và phương thức trong object trong javascript

// thuộc tính là những phần của đối tượng biểu diễn các đặc điểm/đặc trưng của đối tượng có

// string, number, boolean, array, null, undefined,... object
// let people1 = {
//   hand: 2,
//   leg: 2,
//   children: [people1, people1],
// }

// phương thức: là những phần của đối tượng biểu diễn các hành động, hành vi của đối tượng

// let people2 = {
//   run: function () {
//     console.log("Run");
//   },
//   sayHi: function () {
//     console.log("Hi");
//   }
// }

// Đối tượng có thể bao gồm cả thuộc tính và phương thức trong cùng 1 khai báo

// let people = {
//   hand: 2,
//   leg: 2,
//   children: [],

//   run: function () {
//     console.log("Run");
//   },
//   sayHi: function () {
//     console.log("Hi");
//   }
// }

// truy xuất giá trị của các thành phần của đối tượng
// console.log(people);

// dùng toán tử "." để truy xuất giá trị của thành phần của đối tượng

// console.log(people.hand)
// console.log(people.leg)

// people.run()

// dùng toán tử "[$objectPropertyName]" để truy xuất giá trị của thành phần của đối tượng

// console.log("hand: ",people["hand"])
// console.log("leg: ",people["leg"])
// people["run"]()

// "this" keyword trong object JS
// this nó tạo 1 liên kết đến đối tượng đang thực thi phương thức/hàm đang sử dụng từ khoá this 


// let dat = {
//   hand: 2,
//   leg: 2,
//   myName: "Đạt", 
//   run: function () {
//     console.log("Run");
//   },
//   sayHi: function () {
//     console.log("Hi");
//   },
//   sayMyName: function(){
//     console.log("Hi! my name is ", this.myName)
//   }
// }

// dat.sayMyName();


const seattle = {
  locationName: "Seattle",
  minCusPerHour: 23,
  maxCusPerHour: 65,
  avgPurchasedCookiesPerCus: 6.3,
}