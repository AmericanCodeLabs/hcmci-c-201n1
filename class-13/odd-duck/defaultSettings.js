// retrieve theme settings data


let themeSettings = JSON.parse(
  localStorage.getItem("themeSettings")
);

console.log(themeSettings);

function setTheme(theme) {
  let bodyTag = document.getElementsByTagName('body')[0];

  bodyTag.classList.remove('light-theme', 'dark-theme');

  bodyTag.classList.add(theme);
}

if (themeSettings) {
  setTheme(themeSettings.theme)
}