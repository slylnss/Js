//Soustraction 

var Soustraction = function (a, b)  {
	return a - b;
};
var a = prompt("Entrez un chiffre supérieur à 10");
var b = prompt("Entrez un chiffre inférieur à 10");
var result = Soustraction(a,b);
console.log("Le résultat de " + a + " - " + b + " = " + result);

//Division

var division = function (a, b) {
	return a / b;
};

var a = prompt("Entrez un chiffre supérieur à 10");
var b = prompt("Entrez un chiffre inférieur à 10");
var result = division(a,b);
console.log("Le résultat de " + a + " / " + b + " = " + result);

//Multiplication

var multiplications = function (a, b) {
	return a * b;
};

var a = prompt("Entrez un chiffre supérieur à 10");
var b = prompt("Entrez un chiffre inférieur à 10");
var result = multiplications(a,b);
console.log("Le résultat de " + a + " * " + b + " = " + result);

//Pourcentage

var pourcentage = function (a, b) {
	return (a /100) * b;
};

var a = prompt("Entrez un chiffre inférieur à 100");
var b = prompt("Entrez un chiffre inférieur à 100");
var result = pourcentage(a,b);
console.log(" Vous avez " + result + "%");

//Vitesse

var vitesse = function (a, b) {
	return (a / b);
};

var a = prompt("Entrez un chiffre supérieur à 10");
var b = prompt("Entrez un chiffre inférieur à 10");
var result = vitesse(a,b);
console.log("Vous roulez à " + result + "km/h");






