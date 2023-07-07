// console.log('hello world!')

// this
// tham chiếu đến đối tượng đang thực thi hành động

// object

let studentSang = {
  studentName: "Sáng",
  age: 30,
  // thuộc tính 

  sayHello: function () {
    console.log("Hello ")
  },

  showThisValue: function(){
    console.log("this",this)
  },

  sayHelloWithMyName: function(){
    console.log("Hi", this.studentName)
  }


  // phương thức
}



// console.log(studentSang)

// console.log(studentSang.studentName)

// studentSang.sayHello();

studentSang.showThisValue()
studentSang.sayHelloWithMyName();
