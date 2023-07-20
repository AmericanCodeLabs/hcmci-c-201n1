
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
//   sayMyName: function () {
//     console.log("Hi! my name is ", this.myName)
//   }
// }

// let khoi = {
//   hand: 2,
//   leg: 2,
//   myName: "Khôi",
//   run: function () {
//     console.log("Run");
//   },
//   sayHi: function () {
//     console.log("Hi");
//   },
//   sayMyName: function () {
//     console.log("Hi! my name is ", this.myName)
//   }
// }

// let sang = {
//   hand: 2,
//   leg: 2,
//   myName: "Sáng",
//   run: function () {
//     console.log("Run");
//   },
//   sayHi: function () {
//     console.log("Hi");
//   },
//   sayMyName: function () {
//     console.log("Hi! my name is ", this.myName)
//   }
// }



// class
// es6 -> bổ sung thêm 1 vài hàm / tính năng mới -> class
// es5 -> đáp ứng được đa số các nền tảng đang chạy JS

// Constructor Function
/*
Syntax:

function $constructorFunctionName($parameters|$arguments){
  // logic code

  // khai báo thuộc tính
  this.$attributeName = $value;

  // khai báo phương thức
  this.$methodName = function(){
    // logic code của method
  }
}

Notes:
  - Tên của $constructorFunctionName sẽ viết hoa chữ cái đầu
  - thuộc tính và phương thức của đối tượng thì sẽ khai báo bằng từ khoá "this"
*/

function People(myName) {
  this.hand = 2;
  this.leg = 2;
  this.myName = myName;

  this.run = function () {
    console.log("Run");
  };

  this.sayHi = function () {
    console.log("Hi");
  };

  this.sayMyName = function () {
    console.log("Hi! my name is ", this.myName)
  }
}

const dat = new People("Đạt");
dat["sayMyName"]();

const khoi = new People("Khôi");
khoi.sayMyName();

const sang = new People("Sáng");
sang.sayMyName();

/*
  hand: 2,
  leg: 2,
  myName: "Sáng",
  run: function () {
    console.log("Run");
  },
  sayHi: function () {
    console.log("Hi");
  },
  sayMyName: function () {
    console.log("Hi! my name is ", this.myName)
  }
*/