const manh = {
  // thuộc tính: properties
  tay: 2,
  chan: 2,

  // phương thức: method
  hoc: function () {
    console.log("Tôi đang học FE");
  }
}

const sang = {
  // thuộc tính: properties
  tay: 2,
  chan: 2,

  laptop: 2,

  // phương thức: method
  hoc: function () {
    console.log("Tôi đang học FE");
  }
}



const dragonFruitYakult = {
  image: 'https://haanh-180197.github.io/Final-Project/image-banner-menu/menu/%C4%91%E1%BB%93%20u%E1%BB%91ng/yakul-1-cd6d.jpg',
  name: 'Dragon Fruit Yakult',
  price: '49.000',
}

const traSuaTasty = {
  image: 'https://haanh-180197.github.io/Final-Project/image-banner-menu/menu/%C4%91%E1%BB%93%20u%E1%BB%91ng/tra-sua-tasty-1280x1000-9a3c.jpg',
  name: 'Trà sữa TASTY',
  price: '39.000',
}


const bacXiuTasty = {
  image: 'https://haanh-180197.github.io/Final-Project/image-banner-menu/menu/%C4%91%E1%BB%93%20u%E1%BB%91ng/bac-xiu-tasty-1280x1000-98cd.jpg',
  name: 'Bạc xỉu TASTY',
  price: '39.000',
}

// chọn ra phần tử DOM 
/*
  - theo id: 
  document.getElementById($id) 
  ==> 1 phần tử (DOM)

  - chọn theo class: 
  document.getElementsByClassName($className)
  ==> n phần tử (DOMs)

  - chọn theo tag name: 
  document.getElementsByTagName($tagName) 
  ==> n phần tử (DOMs)


*/
// tạo ra 1 DOM mới
// document.createElement($tagname)


/*
tương tác với phần tử đó

- Thêm thuộc tính 
  element.setAttribute($attrbuteName, $attributeValue);

- Thêm nội dung
  element.innerHTML = $value

- Thêm một phần tử con 

  element.appendChild($childElement)


*/



/*
  - chọn ra phần tử chứa các item: ul#itemsContainer
  - Loop qua mảng data và tạo ra các thẻ li và các thông tin liên quan
    -> Insert li vào lại HTML để làm con của thẻ ul
  

*/


/*
<li class="item">
      <article class="product">
        <img class="thumpnail"
          src="https://haanh-180197.github.io/Final-Project/image-banner-menu/menu/khai%20v%E1%BB%8B/nem-lui-434c.jpg"
          alt="Nem lụi nướng mía image" srcset="">
        <div class="info">
          <div class="title-container">
            <h3 class="title">Dragon fruit Yakult</h3>
            <p class="price">158.000 đ </p>
          </div>
          <img class="heart-icon"
            src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
            alt="heart icon">
        </div>
        <button class="order-button">ĐẶT MÓN</button>
      </article>
    </li>

*/
const ul = document.getElementById("itemsContainer");

const menu = [dragonFruitYakult];

for (let i = 0; i < menu.length; i++) {

  const item = menu[i];
  console.log(item);

  // // create li 

  //  <li class="item"></li>
  let liTagName = "li";
  let liAttributes = {
    "class": "item"
  }
  let li = createElementAndSetAttributes(liTagName, liAttributes);

  // add content
  li.innerHTML = 'Li ' + i;


  let div = document.createElement("div");
  div.setAttribute("class", "div1");

  li.appendChild(div);

  // insert into HTML
  ul.appendChild(li);

}


/*

*/


/*

  <img src="https://google.com/cat.jpg" alt="Cat iamge"  />

  attributes = {
    "class" : "item",
    "src": "img-url",
  }

  */
function createElementAndSetAttributes(tagName, attributes) {
  console.log("tagName: ", tagName, "\nattributes: ", attributes);

  // create li 
  let element = document.createElement(tagName);
  console.log(element);

  // get all keys of object as a list
  // ["class", "src"]
  let keys = Object.keys(attributes);

  console.log("keys: ", keys);

  for (let i = 0; i < keys.length; i++) {

    const attributeKey = keys[i];
    const attributeValue = attributes[attributeKey];
    console.log("attr key: ", attributeKey, '\nattr value: ', attributeValue);
    element.setAttribute(attributeKey, attributeValue);

  }

  // <li  class="item" ></li>

  return element;

}


