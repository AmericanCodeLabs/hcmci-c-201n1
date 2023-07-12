// string 
const mrSangName = 'Sáng';

// console.log(mrSangName)

const datBroName = "Đạt";

// console.log(datBroName);

// String template literal
// ``
const khoiName = `Khôi`;

// console.log(khoiName);

function sayHi(userName1, userName2) {
  console.log("Hi " + userName1 + ", " + userName2 + "!!");
  // Hi Sang Dat!!
  console.log(`Hi ${userName1}, ${userName2}!!`)
}

sayHi(mrSangName, datBroName);