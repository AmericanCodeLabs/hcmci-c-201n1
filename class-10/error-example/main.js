
let anhManh = "Mạnh";

let anhSang = "Sáng";


debugger;

anhManh = "Mạnh 1";

debugger;

anhSang = "Sáng 1";


function hello(user) {

  debugger;

  console.log("Hello " + user);
}


function helloAll() {

  console.log("Start hello!!!!");

  hello(anhSang);

  hello(anhManh);
}

helloAll();

