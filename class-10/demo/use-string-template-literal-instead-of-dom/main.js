function PreList(content, name) {
  this.content = content
  this.name = name
}

let milk = new PreList("1 1/2 cups Milk", "milk")
let mascarpone = new PreList("1/2 cup mascarpone", "mascarpone")
let salt = new PreList("1/2 tsp pink Salt", "salt")
let figs = new PreList("1 lb Black Mission Figs", "figs")
let sugar = new PreList("1/2 cup Brown Sugar", "sugar")
let water = new PreList(" 2-4 tbsp water")
let cream = new PreList(" 1 1/2 cups heavy cream", "cream")
let granSugar = new PreList("1/3 granulated sugar", "gransugar")
let egg = new PreList(" egg York", "egg")
let juiced = PreList("1 lemon, Juiced", "juiced")
let butter = new PreList("2 tbsp butter", "butter")
let honey = new PreList("1 cup honey roasted pecans,  roughly chopped", "honey")


let arrayList = [milk, mascarpone, salt, figs, sugar, water, cream, granSugar, egg, juiced, butter, honey]
// 

/*
<article>
  <h2>milk</h2>
  <p>1 1/2 cups Milk</p>
</article>
*/

PreList.prototype.createHTMLStructure = function () {
  let article = document.createElement('article');
  document.body.appendChild(article);


  let articleContent = `
    <h2 class="">${this.name}</h2>
    <p>${this.content}</p>
    `

    console.log('articleContent: ', articleContent)

    article.innerHTML =  articleContent;

  // let h2 = document.createElement('h2');
  // h2.innerHTML = this.name;
  // article.appendChild(h2);
  
  // let p = document.createElement('p');
  // p.innerHTML = this.content;
  // article.appendChild(p);

}

console.log(milk);
milk.createHTMLStructure();


