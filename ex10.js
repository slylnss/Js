//Exercice 1 

corps = document.getElementsByTagName("body")[0];
console.log(corps);

corps = document.getElementsByTagName("body")[0].removeAttribute("class", "bg-aqua");
corps = document.getElementsByTagName("body")[0].setAttribute("class", "bg-olive");

firstParagraphe = document.getElementById("first-paragraph");
console.log(firstParagraphe);

firstParagraphe = document.getElementById("first-paragraph").removeAttribute("class", "bg-lime gray");
firstParagraphe = document.getElementById("first-paragraph").setAttribute("class", "aqua");

Bgsilver = document.getElementsByClassName("bg-silver");
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

elem = document.querySelector("pre");
console.log(elem);

elem.style.color = "blue";
elem.style.backgroundColor = "white";
elem.style.borderTop = "solid red 3px";
elem.style.borderBottom = "solid red 3px";


firstH3= document.querySelector("H3");
console.log(firstH3);

firstH3.innerHTML = "<em>Itelic title ! yeah !</em>";

firstH2 = document.querySelector("H2");
console.log(firstH2);

firstH2.innerHTML = "<strong>HTML doens't work !</strong>";
firstH2.style.color = "red";

//Exercice 4

firstUl = document.querySelector("ul");
console.log(firstUl);

ajoutLi = document.createElement("li")
firstUl.appendChild(ajoutLi);
ajoutLi.innerHTML="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";

firstLien = document.querySelector("ul").querySelector("a");
console.log(firstLien);

firstLien.style.color ="red";

//Exercice 4 bis

firstOl = document.querySelector("ol");
console.log(firstOl);

while (firstOl.firstChild){
	firstOl.removeChild(firstOl.firstChild);
}

var nouvellesValeurs=["Silent Teacher","Code Monkey","Code Combat"];

for (i=0; i<nouvellesValeurs.length; i++){
	nouvelElement = document.createElement("li");
	firstOl.appendChild(nouvelElement);
	nouvelElement.innerHTML= nouvellesValeurs[i];
}