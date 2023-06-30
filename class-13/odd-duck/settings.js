




let listButton = document.getElementsByTagName('button');

let switchButton = listButton[0]
let removeSettingsButton = listButton[1]

removeSettingsButton.addEventListener("click", function (event) {
  localStorage.removeItem("themeSettings");
})


function switchTheme() {
  let bodyTag = document.getElementsByTagName('body')[0];

  let isLightTheme = bodyTag.classList.contains('light-theme');

  // store into localStorage

  let themeSettings = {
    theme: ''
  }

  if (isLightTheme) {
    bodyTag.classList.remove('light-theme');
    bodyTag.classList.add('dark-theme');

    themeSettings.theme = 'dark-theme';

  } else {
    bodyTag.classList.remove('dark-theme');
    bodyTag.classList.add('light-theme');

    themeSettings.theme = 'light-theme';

  }

  localStorage.setItem("themeSettings", JSON.stringify(themeSettings))

}

switchButton.addEventListener('click', function (event) {
  switchTheme();
})

//  solution ==> localStorageAPI của Browser

/* 

LocalStorage : {
  "instructor": "Khôi",
  "student1": "a.Sáng",
  "student2": "Đạt"

}




Gán giá trị cho 1 cặp key-value trong localstorage
syntax:localStorage.setItem($key, $value)

Lấy giá trị cho 1 cặp key-value trong localstorage
syntax:localStorage.getItem($key)


{
  "instructor": "Khôi",
  "student1": "a.Sáng",
  "student2": "Đạt"

} : JSON 


Convert JSON object to String
syntax: JSON.stringify($JSONObject) ==> String


Convert String to JSON object 
syntax: JSON.parse($String) ==> JSON Object

*/