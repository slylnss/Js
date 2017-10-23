//Exercice 1 

corps = document.getElementsByTagName("body")[0];
console.log(corps);

corps = document.getElementsByTagName("body")[0].removeAttribute("class", "bg-aqua");
corps = document.getElementsByTagName("body")[0].setAttribute("class", "bg-olive");

firstParagraphe = document.getElementById("first-paragraph");
console.log(firstParagraphe);

firstParagraphe = document.getElementById("first-paragraph").removeAttribute("class", "bg-lime gray");
firstParagraphe = document.getElementById("first-paragraph").setAttribute("class", "aqua");

Bgsilver = document.getElementsByClassName('bg-silver');
console.log(Bgsilver);

Bgsilver = document.getElementsByTagName("blockquote")[0].removeAttribute("class", "bg-silver");
Bgsilver = document.getElementsByTagName("blockquote")[0].setAttribute("class", "bg-teal");

blockQuote = document.getElementsByTagName("blockquote")[0];
console.log(blockQuote);

blockQuote = document.getElementsByTagName("blockquote")[0].setAttribute("class", "bg-white");

//Exercice 2

table = document.querySelector("#my-table");
console.log(table);

table = document.querySelector("#my-table").setAttribute("class", "bg-purple");

paragraphe = document.querySelectorAll("p");
console.log(paragraphe);
x=paragraphe.length;
for (i=0; i < x; i++){
paragraphe = document.querySelectorAll("p")[i].setAttribute("class", "shadow");
};

//Exercice 3

