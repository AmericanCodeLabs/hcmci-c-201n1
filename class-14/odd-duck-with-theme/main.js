// constructor function to create img object
function randomIMG(image, title) {
  this.image = image;
  this.title = title;
}
// create object
let bag = new randomIMG('./img/bag.jpg', 'bag')
let banana = new randomIMG('./img/banana.jpg', 'banana')
let bathrom = new randomIMG('./img/banana.jpg', 'bathrom')
let boots = new randomIMG('./img/boots.jpeg', 'boots')
let breakfast = new randomIMG('./img/breakfast.jpg', 'breakfast')
let bubblegum = new randomIMG('./img/bubblegum.jpg', 'bubblegum')
let chair = new randomIMG('./img/chair.jpg', 'chair')
let cthulhu = new randomIMG('.img/cthulhu.jpg', 'cthulhu')
let dogDuck = new randomIMG('./img/dog-duck.jpg', 'dog-duck')
let dragon = new randomIMG('./img/dargon.jpg', 'dragon')
let pen = new randomIMG('./img/pen.jpg', 'pen')
let petSweep = new randomIMG('./img/pet-sweep.jpg', 'pet-sweep')
let scissors = new randomIMG('./img/scissors.jpg', 'scissors')
let tauntaun = new randomIMG('./img/tauntaun.jpg', 'tauntaun')
let unicorn = new randomIMG('./img/unicorn.jpg', 'unicorn')
let waterCan = new randomIMG('./img/water-can.jpg', 'water-can')
let wineGlass = new randomIMG('./img/wine-glass', 'wine-glass')
// 2.0 write it in HTML
// 2.1 get element from object
// let titleImg = document.getElementById('title')
// let objectImg = document.getElementById('pictures')
// 2.2 Update to HTMl
// titleImg.textContent = bag.title;
// objectImg.src = bag.image;
// Math random function to randomize
let pool = [bag, banana, bathrom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, tauntaun, unicorn, waterCan, wineGlass]


let radom3Elements = [];


// write a while loop for random element.
while (radom3Elements.length < 3) {
  let random = Math.floor(Math.random() * pool.length);
  let elementGenerated = pool[random];
  if (!radom3Elements.includes(elementGenerated)) {
    // 1 bug
    radom3Elements.push(elementGenerated)
  }
}

console.log(radom3Elements);

let productContainers = document.getElementsByClassName('product');

for (let i = 0; i < radom3Elements.length; i++) {

  let productData = radom3Elements[i];
  let productContainer = productContainers[i];

  // 2.1 get element from object
  let titleImg = productContainer.getElementsByClassName("title")[0];
  let objectImg = productContainer.getElementsByClassName("thumpnail")[0];
  // 2.2 Update to HTMl
  console.log(productData, productContainer, titleImg, objectImg);
  titleImg.textContent = productData.title;
  objectImg.src = productData.image;
  // Math random function to randomize




}
// let random= Math.floor(Math.random()*pool.length);
// let elementGenerated = pool[random];
// console.log (elementGenerated)
// event listentner
// decalre vairable for store data clicked.
// show data on the web