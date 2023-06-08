let chaoTom = {
  thumpnail: './img/chao-tom-4e2c.jpg',
  title: 'Cháo tôm',
  price: 78000,
}


let nemChuaTasty = {
  thumpnail: './img/nem-lui-434c.jpg',
  title: 'Nem chua tasty',
  price: '158.000',
  order: '123',
}

let nemLuiNuongMia = {
  thumpnail: 'https://haanh-180197.github.io/Final-Project/image-banner-menu/menu/khai%20v%E1%BB%8B/nem-lui-434c.jpg',
  title: 'Nem lụi nướng mía',
  price: '158.000',
}


/// constructor function

function Dishes(thumpnail, title, price) {
  // thuộc tính và phương thức của đối tượng

  this.thumpnail = thumpnail;
  this.title = title;
  this.price = price;
  // currency
  // get price with currency 

  this.order = function (quantity) {
    return this.price * quantity;
  }

  // context 
}

// prototype
Dishes.prototype.currency = "VND";
Dishes.prototype.getPriceWithCurrency = function () {
  return `${this.price} ${this.currency}`;
}

Dishes.prototype.getBill = function(quantity){
  return `${this.order(quantity)} ${this.currency}`;
}

let banhTrangTron = new Dishes("./thumpnail1.png", "Bánh tráng trộn", 1000);

// console.log(banhTrangTron);
// console.log(banhTrangTron.currency);
// console.log(banhTrangTron.getPriceWithCurrency());

console.log(banhTrangTron.getBill(4))

/*
  this không có liên quan gì đến Constructor function cả 
  mà this nó sẽ trỏ đến đối tượng được tạo ra bởi Constructor function


  Constructor function Người
  manh = new Nguoi
  sang = new Nguoi


  this -> manh | sang


  let button = document.getElementById(id);

  button.onclick = function(){
    console.log(this)
  }


*/