//Exercice du pendu


var mot=prompt("Entrez un mot mystère");
var motMystere = mot;
var tentativeRatee = 0;
var lettreChoisie = "";

var guessLetter = function(){
	if(motMystere.length !=0){
		lettreChoisie = prompt('Entrez une lettre');
	};
};

guessLetter();





/*let lettres =['B', 'O', 'N', 'J', 'O', 'U', 'R'];

let devin = ["","","","","","","","_"];

var tentativeRatee = 0;

var tentativePossible = lettres.length;

var guestLetter = function(lettres){

	while (tentativePossible !=0){

	for(let i=0; i<lettres.length; i++){
		
	var lettreChoisie = prompt('Entrez une lettre');

	if (lettreChoisie == lettres[i]){
		alert('Bien joué, on continue');
		devin.push(lettreChoisie);
			for(let j=0; j<lettres.length; j++){
				console.log(devin[j]);
			};
		
	}else{
		alert('Essaie encore');
		tentativeRatee+=1;
	};

	};
	tentativePossible-=1;
		if (tentativePossible=0){
			alert("Vous n'avez plus de possibilités");
		};
	};

	return;
}

guestLetter();*/