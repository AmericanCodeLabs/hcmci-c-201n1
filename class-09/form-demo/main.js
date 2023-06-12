let saleDataForm = document.getElementById('saleDataForm')
// callback: là 1 hàm mà nó được truyền thông qua tham số của 1 hàm khác và sẽ được gọi trong logic của hàm khác đó

/* 

function addEventListener(eventName, callback){
  gọi đến URL được định nghĩa trong action

  ...

  callback(submitEvent)
}

*/
saleDataForm.addEventListener("submit", saleDataFormSubmitHandle)
// saleDataForm: DOM thể hiện cho thẻ <form/>

function saleDataFormSubmitHandle(submitEvent) {
  // submitEvent: là 1 biến lưu thông tin về sự kiện submit, biến này được hàm addEventListener truyền cho hàm saleDataFormSubmitHandle thông qua lời gọi hàm saleDataFormSubmitHandle(submitEvent)
  submitEvent.preventDefault();


  // get data 
  let locationObject = getData();
  console.log(locationObject);


  // insert data into HTML
  renderLocationIntoHTML(locationObject);

  // clear input data
  // saleDataForm.reset();



}


function Location(locationName, saleData) {
  this.name = locationName;
  this.saleData = saleData;
}

function getData() {
  let locationInput = document.getElementById('location');
  let locationName = locationInput.value;

  let saleData = [];
  for (let i = 6; i <= 10; i++) {

    let saleDataInput = document.getElementById(`${i}am`);
    saleData.push(Number(saleDataInput.value))

    //clean data of sale data input
    saleDataInput.value = "";

  }

  let locationObject = new Location(locationName, saleData);
  return locationObject;
}

function renderLocationIntoHTML(locationObject) {

  let tr = document.createElement('tr');

  let content = `<td>${locationObject.name}</td>`;

  for (let i = 0; i < locationObject.saleData.length; i++) {

    let saleDataItem = locationObject.saleData[i];
    let saleDataHTML = `<td>${saleDataItem}</td>`;

    content += saleDataHTML;
  }

  console.log(content);
  /*
<td>Hồ Chí Minh</td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>9</td>
<td>10</td>
  */

  tr.innerHTML = content;

  let locationDataTable = document.getElementById('locationDataTable');

  locationDataTable.appendChild(tr);

}