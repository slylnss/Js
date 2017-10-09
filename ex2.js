//Exercice 1

var langue = "fr";
var mess = prompt ("Votre langue fr ou es ou en");

if (mess == "fr"){
	console.log('Bonjour tout le monde');
}else if (mess == "es"){
	console.log('Hola mundo');
}else{
	console.log('Hello World');
}

//Exercice 2

var score = 100;
var result = prompt ('Quel est votre score sur 100?');

if (result >=90){
	console.log('Vous avez atteint le rang A');
}else if (result >50 && result <90){
	console.log('Vous avez atteint le rang B');
}else {
	console.log('Vous êtes du rang C');
}

// Exercice 3

var singulier = "mot";
var dispo = 5;
var result = "Je possède 5 " + singulier + "s"  ;

if (dispo > 1){
	console.log (result);
}
else{
	console.log ("je n'ai qu'un " + singulier);
}