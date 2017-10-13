let motPendu = ["B","O","N","J","O","U","R"];
let motTrouve = ["_", "_", "_", "_", "_", "_", "_"];
var penduEntier = motPendu.join("");
var trouveEntier = motTrouve.join();
var message = "";
var longeurMotPendu = motPendu.length;
var tentativeTotale = 0;
var tentativeJouee = 0;
var tentativeRatee = 0;
var essaiRestant = longeurMotPendu - tentativeRatee;
let lettreJouee = [];

function guessLetter() {
	if (essaiRestant == 0){
		alert("Vous n'avez plus d'essais");
	}

	var essai = window.prompt (message + " Entrez une lettre " + trouveEntier, "");
	essai = essai.toUpperCase();
	console.log(essai);

	if (essai == penduEntier){
		tentativeJouee++;
		alert("Vous avez gagné!");
	}else if (essai.length != 1){
		message = "Essaie encore";
		console.log(message);
		guessLetter();
	}else if (lettreJouee.indexOf(essai) != -1){
		tentativeJouee++;
		tentativeRatee++;
		essaiRestant = longeurMotPendu - tentativeRatee;
		alert("Déjà tenté!");
		guessLetter();
	}else{
		lettreJouee.push(essai);
		tentativeJouee++;
		if (motPendu.indexOf(essai) == -1){
			tentativeRatee++;
			essaiRestant = longeurMotPendu - tentativeRatee;
			alert("Essaie encore");
			guessLetter;
		}
		for (i=0; i<longeurMotPendu; i++){
			if (essai == motPendu[i]){
				motTrouve.splice(i,1,essai);
				tentativeTotale++;
				trouveEntier= motTrouve.join();
				alert("Bien joué");
			}
		}
	if (tentativeTotale != longeurMotPendu){
		guessLetter();
	}else{
		alert("Vous avez gagné!")
	}
	}
}

guessLetter();