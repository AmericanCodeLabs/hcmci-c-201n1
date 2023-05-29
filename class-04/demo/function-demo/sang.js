
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



function primeNumber(count) {
  // khởi tạo
  let current = 1;
  let sum = 0;

  // thuật toán
  while (count > 0) {
    // logic 

    // kiểm tra có phải số nguyên tố không
    let isPrime = true;
    // true: là số nguyên tố, false: là không phải số nguyên tố
    for (let i = 2; i < current; i++) {

      if (current % i === 0) {
        isPrime = false;
      }
    }
    // let arr = [1,2,3] 
    // let str = '1,2,3'

    if (isPrime) {
      console.log(current);

      count--;
      sum += current;
    }

    current++;
  }

  console.log(count, sum);

  return sum;
}

primeNumber(9);

