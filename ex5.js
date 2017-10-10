//Exercice 1

let nombre = [1,2,3,4,5,6,7,8,9];
var result=nombre[0];


for(let i=1; i<nombre.length; i++){
	
	console.log(result);
	result = nombre[i]+result;
};

//Exercice 2

let actrice=["", "Sophie Marceau", "Demi Moore", "Cecile De France"];
let nombres=["", "première", "deuxième", "troisième"];

i=1;
while (i<actrice.length){
	console.log("La numéro " + nombres[i] + " est " + actrice[i]);
	i++;
};

//Exercice 3

let heros = ["Mario", "Luigi", "Peach"];

let clone = heros.slice(0,3);

console.log(heros);
console.log(clone);
clone.push("Browser");
console.log(clone);


