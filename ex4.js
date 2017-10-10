//Exercice 1

var nbr=0;

while (nbr<=20){
	
	if (nbr%2){
		console.log(nbr + " est impair");
	}
	else{
		console.log(nbr + " est pair");
	}
	nbr +=1;
}

//Exercice 2

var nbr=9;
var result= 0;

for (i=0; i<=10; i++)
{
	result = nbr * i;
	console.log(i + " * " + nbr + " = " + result);
}

//Exercice 3
var grade= function(score){
	if (score>=90){
		message ="Votre grade est A";
	}else if (score >=80 && score <=89){
		message ="Votre grade est B";
	}else if (score >=70 && score <=79){
		message ="Votre grade est C";
	}else if (score >=65 && score <=69){
		message ="Votre grade est D"; 
	}else{
		message ="Votre grade est F";
	}

	return message;
};

var score=0;

while (score<101)
{
	console.log(score);
	console.log(grade(score));
	score+=1;

};



//Exercice 4

var symbole = "*";

for (i=0; i<5; i++){
	console.log(symbole);
	symbole+="*";
};