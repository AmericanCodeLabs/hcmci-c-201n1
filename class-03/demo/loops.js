


/* syntax while loop


while ( điều kiện lặp | condition ) {

  // logic lặp
}


điều kiện lặp của computer


- in phần tử đầu tiên, 
- kiểm tra vòng lặp phải bé hơn<2 (computer.length)
- in phần tử tiếp theo + kiểm tra lại vòng lặp


Điều kiện lặp: 


Logic lặp: In phần tử


Flag: cờ -> 1 cái biến (quy định index của phần tử đang xét)

==> điều kiện lặp: Flag < độ dài của mảng

====> logic lặp: 
      - in ra giá trị hiện tại
      - tăng giá trị của cái Flag

*/




// let computers = ["Window", "Linux", "MacOS", "Surface"];


// let flag = 0;
// let len = computers.length
// while (flag < len) {
//     console.log(computers[flag]);
//     flag++;
// }


/* 
flag = 0;
len = 4;

tại thời điểm bắt đầu while

flag: 0
len: 4

=> flag < len : true
  - console.log(computers[flag]) 
    => computers[0]
      => "Window"
  
  - flag++
    => 1


tại thời điểm 1
flag = 1;
len = 4;
=> flag < len : true
  - console.log(computers[flag]) 
    => computers[1]
      => "Linux"

  - flag++;
    => 2

tại thời điểm 2
flag = 2;
len = 4;
=> flag < len : 








*/


// let computers1 = ["Window", "Linux", "MacOS", "Surface"];

/*

syntax for loops


for (khai báo biến flag; điều kiện lặp; update) {
  // logic loop 
}





*/



let computers1 = ["Window", "Linux", "MacOS", "Surface"];


let len = computers1.length

for (let i = 0; i < len; i++) {
  console.log(computers1[i]);
}


// i = 0 : expression
// = : operator

for (let i = 0; i < computers1.length; i++) {
  console.log(computers1[i]);
}



// JS: Array.length : attribute
// JS : Array.push() : method


// let computers1 = ["Window", "Linux", "MacOS", "Surface"];


// Sự khác biệt giữa while v



