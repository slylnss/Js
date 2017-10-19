let message = " ";
let essai = 0;
let min = Math.floor(Math.random(0,20)*20);
let max = Math.floor(Math.random(0,80)*80);
let numChoisi = prompt("Entrez un numéro entre 0 et 80");


let numAleatoire = function(min, max) {
	return Math.floor(Math.random(min,max)*max);
};

let num = numAleatoire(min,max);

jeu = function() {

if(numChoisi>0 && numChoisi<80){

	while (numChoisi != num){

		if (numChoisi < num){
			console.log(numChoisi);
			message = console.log("C'est plus !");
			numChoisi = prompt("Entrez un numéro entre 0 et 80");

		}
		else if (numChoisi > num) {
			console.log(numChoisi);
			message = console.log("C'est moins!");
			numChoisi = prompt("Entrez un numéro entre 0 et 80");
		}

	}
}

else if (numChoisi == num) {
			console.log(numChoisi);
			message = console.log("Tu as gagné !");
		}

else{
	console.log(numChoisi);
	message = alert("Ton numéro ne respecte pas les conditions");
}

return message;
}

jeu();

