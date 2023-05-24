



let computers = ["Window", "Linux", "MacOS"];














let languages = [
  "HTML", "CSS", "JS",
  10, 2023,
  true, false,
  null, undefined,
  computers,
  ["ReactJS", "VueJS"]
]


// lấy độ dài

let length = languages.length;
// 
console.log(length);

// Lấy phần tử đầu tiên

// let firstItem = languages[0];

// console.log(firstItem);


// Thêm 1 phần tử vào cuối array
languages.push("Sáng");
languages.push("Sáng");
languages.push("Sáng1");

console.log("Thêm Sáng vào array: ", languages);

// gán lại giá trị phần tử tại 1 index
// array[index] = newValue


// let index = languages.indexOf("Sáng");

let currentLength = languages.length;

let index1 = currentLength - 2 ;

console.log(index1);


languages[index1] = "Mạnh";

console.log(languages);








// const people = [
//   ['pete', 32, 'librarian', null],
//   ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'],
//   ['bill', null, 'artist', null]
// ];


// // Lấy chữ 'bill' --> console.log

// const peopleLength = people.length;
// // Cách anh Mạnh


// const bill2 = people[2][0];
// console.log("bill2: ", bill2);


// const bill = people[peopleLength - 1][0];

// console.log("bill: ", bill)

// // Cách anh Sáng

// const container = people[peopleLength - 1];
// console.log("container", container);

// const bill1 = container[0];

// console.log("bill1: ", bill1)










