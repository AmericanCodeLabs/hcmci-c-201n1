

// function sayMyName(inputName) {

//   console.log(inputName)

//   return "Hello " + inputName;

// }

// sayMyName("Sáng")

// let returnName = sayMyName("Mạnh")

// console.log("returnName: ", returnName);





// Tìm tổng n các số nguyên tố gần nhất tính từ 1:

// input: 5
// 1 + 2 + 3 + 5 + 7




/*

count: Số lượng các số nguyên tố cần tính tổng gần nhất bắt đầu từ số 1

* Bước khởi tạo:
  - current: Biến trượt bắt đầu từ 1 và tăng dần để kiếm tất cả các số nguyên tố hợp lệ
  - sum: Giá trị tổng của "$count" số nguyên tố 


* Bước thuật toán:
  - em sẽ trượt biến "current" từ 1 -> 2 -> 3 -> ... để kiểm tra số nguyên tố
  - cứ mỗi lần em tìm dc 1 số nguyên tố hợp lệ 
    -> trừ biến "count" đi 1 đơn vị 
    -> sum + với số vừa tìm được


  ==> Thuật toán sẽ dừng khi "count" <= 0 
  ===> return sum


*/









/* 
- sẽ tạo 1 mảng chứa danh sách số nguyên tố

- tìm kiếm các số nguyên tố khác để push vào mảng cho đến khi mảng có số lượng bằng số lượng cần tìm theo nguyên lý số nào không chia hết cho 2 phần tử trong mảng số nguyên tố chính là số nguyên tố tiếp theo

- Sau cùng tính tổng các chữ số trong mảng
*/


function countPrimeNumber(count) {
  let current = 1;
  let primeNumbers = [];
  let sum = 0;
  while (primeNumbers.length < count) {
    let isPrimeLimit = 1; // flag
    for (let i = 0; i < primeNumbers.length; i++) {
      if (current % primeNumbers[i] == 0) {
        isPrimeLimit--;
      }
    }
    if (isPrimeLimit >= 0) {
      primeNumbers.push(current);
      sum += current;
    }
    current++;
  }
  return [sum, primeNumbers, count];
}

// console.log(countPrimeNumber(7));



// Sắp xếp lại danh sách các số trong mảng
// Sắp xếp chèn, nhị phân, 

// [1,7,5,9,31, a, c, b, de, dd, dde,dee]

// [1,5,7,9,31 a, b, c, dd, de, dde, dee ]
//



/*

Array: Biến chứa danh sách mảng đầu vào (không theo thứ tự và có số và chữ)


* Khởi tạo: 
  - strings: mảng lưu danh sách các phần tử là chữ trong "array" ban đầu
  - numbers: mảng lưu danh sách các phần tử là số trong "array" ban đầu

* Thuật toán:
  - numbers: Lặp qua các phần tử dùng operator > < để sắp xếp lại các phần tử số này

  - strings: 
    + Sắp xếp theo độ dài: lặp qua mảng "strings" và kiểm tra và sắp xếp độ dài của từng phần tử
      * string.length: để lấy độ dài của mảng 

    + Sắp xếp theo alphabet: lặp qua mảng theo từng phần tử và chỉ so sánh khi 2 phần tử có cùng độ dài
      .Sẽ phân rã phần tử ra thành từng ký tự và sau đó so sánh 2 mảng ký tự của 2 phần tử với nhau 
      ex:1. "abc" => ["a","b","c"]
         2. "ade" => ["a","d","e"]
         3. "acb" => ["a","c","b"]
         ===> ["abc", "acb", "ade"]

    + Nối 2 mảng này lại theo thứ tự số -> chữ 
    let result = numbers.concat(strings);


*/


function changePosition(array, index1, index2) {


  /*
        [1, 3, 2] // array
index:   0  1  2

      let temp = array[1];
      array[1] = array[2];
      array[2] = temp;

  */
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}


function compareTwoString(array, index1, index2) {

  const indexChar = ['a', 'b', 'c', 'd', "e", 'f',"g"];
  // acii 

  // "abc".split("") ==> ["a","b","c"];
  const item1Chars = array[index1].split('');
  const item2Chars = array[index2].split('');

  for (let i = 0; i < item1Chars.length; i++) {

    if (indexChar.indexOf(item1Chars[i]) > indexChar.indexOf(item2Chars[i])) {

      changePosition(array, index1, index2);

      break;

    }
  }
}

function sortedStringsByLength(strings) {

  // + Sắp xếp theo độ dài: lặp qua mảng "strings" và kiểm tra và sắp xếp độ dài của từng phần tử
  //   * string.length: để lấy độ dài của mảng 

  // sort by length
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = i + 1; j < strings.length; j++) {

      // [abc, ab] => [ab,abc]
      if (strings[i].length > strings[j].length) {

        changePosition(strings, i, j);

      }

    }

  }
  return strings;


}


function sortedStringsByAlphabet(strings) {


  // + Sắp xếp theo alphabet: lặp qua mảng theo từng phần tử và chỉ so sánh khi 2 phần tử có cùng độ dài
  //   .Sẽ phân rã phần tử ra thành từng ký tự và sau đó so sánh 2 mảng ký tự của 2 phần tử với nhau 
  //   ex:1. "abc" => ["a","b","c"]
  //      2. "ade" => ["a","d","e"]
  //      3. "acb" => ["a","c","b"]
  //      ===> ["abc", "acb", "ade"]


  // sort by alphabet
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = i + 1; j < strings.length; j++) {

      // only compare when two items have same length
      if (strings[i].length == strings[j].length) {

        compareTwoString(strings, i, j);

      }

    }

  }
  return strings;


}

function sortStrings(strings) {
  // - strings: 
  // + Sắp xếp theo độ dài: lặp qua mảng "strings" và kiểm tra và sắp xếp độ dài của từng phần tử
  //   * string.length: để lấy độ dài của mảng 

  // + Sắp xếp theo alphabet: lặp qua mảng theo từng phần tử và chỉ so sánh khi 2 phần tử có cùng độ dài
  //   .Sẽ phân rã phần tử ra thành từng ký tự và sau đó so sánh 2 mảng ký tự của 2 phần tử với nhau 
  //   ex:1. "abc" => ["a","b","c"]
  //      2. "ade" => ["a","d","e"]
  //      3. "acb" => ["a","c","b"]
  //      ===> ["abc", "acb", "ade"]


  strings = sortedStringsByLength(strings);

  strings = sortedStringsByAlphabet(strings);

  return strings;

}


function sortNumbers(numbers) {
  // - numbers: Lặp qua các phần tử dùng operator > < để sắp xếp lại các phần tử số này


  for (let i = 0; i < numbers.length - 1; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

      if (numbers[i] > numbers[j]) {

        changePosition(numbers, i, j);

      }

    }

  }

  return numbers;

}


function sortArray(arrayInput) {
  /*


arrayInput: Biến chứa danh sách mảng đầu vào (không theo thứ tự và có số và chữ)


* Khởi tạo: 
  - strings: mảng lưu danh sách các phần tử là chữ trong "arrayInput" ban đầu
  - numbers: mảng lưu danh sách các phần tử là số trong "arrayInput" ban đầu
  */

  let strings = [];
  let numbers = [];

  for (let i = 0; i < arrayInput.length; i++) {

    // isNaN: is not a number : số: false, khác số: true
    if (isNaN(arrayInput[i])) {
      strings.push(arrayInput[i]);

    } else {
      numbers.push(arrayInput[i]);

    }

  }

  let sortedNumbers = sortNumbers(numbers);
  console.log(sortedNumbers);

  let sortedStrings = sortStrings(strings);
  console.log(sortedStrings);

  let result = sortedNumbers.concat(sortedStrings);

  console.log(result);

  // console.log(sortedNumbers.concat(sortStrings))

}

sortArray([1, 2, 44, 42, 'acd', 'ca', 'dd', 'e', 'ddd', 'a'])

// variable, array, function, for , while

