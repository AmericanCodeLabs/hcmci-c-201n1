function SaleDataItem(hour, quantity) {
  // 6am -> 7pm -> 6 -> 19
  this.hour = hour;
  this.quantity = quantity;
  this.unit = 'cookies';
}

function Location(name, min, max, salesData) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.salesData = salesData;
}


// avg = (tổng số lượng cookies bán ra / tổng số giờ )
// prototype
Location.prototype.caculateAvg = function () {


  let totalPuchasedCookies = 0;
  let totalHours = this.salesData.length;

  for (let i = 0; i < this.salesData.length; i++) {
    let saleDataItem = this.salesData[i];
    totalPuchasedCookies += saleDataItem.quantity;

  }
  console.log("totalPuchasedCookies: ", totalPuchasedCookies, "\ntotalHours: ", totalHours)
  return totalPuchasedCookies / totalHours;

}



const salesDataSeattle = [
  new SaleDataItem(6, 16),
  new SaleDataItem(7, 20),
  new SaleDataItem(8, 35),
  new SaleDataItem(9, 48),
  new SaleDataItem(10, 56),
];

let seattle = new Location("Seattle", 23, 65, salesDataSeattle);

console.log(seattle);

/*
<tr>
  <td>Seattle</td>
  <td>23</td>
  <td>65</td>
  <td>6.3</td>
</tr>
*/

function createTableRow(location) {

  let table = document.getElementById("salesDataTable");

  let tr = document.createElement("tr");

  // ReactJS
  // VueJS
  tr.innerHTML = `
      <td>
        <span>${location.name}</span>
      </td>
      <td>${location.min}</td>
      <td>${location.max}</td>
      <td>${location.caculateAvg()}</td>
  `;

  // let tdName = document.createElement("td");
  // tdName.innerHTML = location.name;
  // tr.appendChild(tdName);

  // let tdMin = document.createElement("td");
  // tdMin.innerHTML = location.min;
  // tr.appendChild(tdMin);

  // let tdMax = document.createElement("td");
  // tdMax.innerHTML = location.max;
  // tr.appendChild(tdMax);

  // let tdAvg = document.createElement("td");

  // let avg = location.caculateAvg();
  // tdAvg.innerHTML = avg;

  // tr.appendChild(tdAvg);

  table.appendChild(tr);

}

createTableRow(seattle);
