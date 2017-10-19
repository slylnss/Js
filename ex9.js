let message = " ";
let essai = 0;
let min = Math.floor(Math.random(0,20)*20);
let max = Math.floor(Math.random(0,80)*80);



let numAleatoire = function(min, max) {
	return Math.floor(Math.random(min,max)*max);
};

let num = numAleatoire(min,max);
console.log("La bonne réponse est " + num);
jeu = function() {
let numChoisi = prompt("Entrez un numéro entre 0 et 80");	
	if(numChoisi>0 && numChoisi<80){
		while (numChoisi != num){
			if (numChoisi < num){
				console.log(numChoisi);
				message = console.log("C'est plus !");
				essai +=1;
			}
			else if (numChoisi > num) {
				console.log(numChoisi);
				message = console.log("C'est moins!");
				essai +=1;
			}
		numChoisi = prompt("Entrez un numéro entre 0 et 80");
		}
		if (numChoisi==num){
				alert("Tu as gagné!");
			}
		else{
			numChoisi = prompt("Entrez un numéro entre 0 et 80");
		}
		
	}
	else{
		console.log(numChoisi);
		message = alert("Ton numéro ne respecte pas les conditions");
	}
	return message;
}

jeu();

