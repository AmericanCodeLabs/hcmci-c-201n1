let names = ["Sáng", "Mạnh", "Khôi"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}


console.log("----")
let forEachResult = names.forEach(function (currentItem, currentIndex) {
  console.log(currentItem)
})

console.log("forEachResult: ", forEachResult);

console.log("----")
let mapResult = names.map(function (currentItem, currentIndex) {
  return "Hello anh " + currentItem;
})

console.log("mapResult: ", mapResult);


console.log("---")

let filterResult = names.filter(function (currentItem, currentIndex, arr) {
  return currentItem === "Mạnh";
})

console.log(filterResult);


console.log("----");
let brosNames = ["Sáng", "Mạnh", "Khôi"];

let filterResult1 = brosNames.filter((brosName, i, arr) => brosName === "Mạnh");

console.log("filterResult1: " + filterResult1);


