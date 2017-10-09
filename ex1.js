//Exercice 1

var nbrdEnfants = prompt('Donnez moi un nombre?');
var nomDeFemme = prompt('Le prenom d\'une femme?');
var unPays = prompt('Le nom d\'un pays?');
var metier = prompt('Et pour finir un métier?');

console.log('Vous serez ' + metier + ' et habiterez Ã /en ' + unPays + ', et mariÃ© a ' + nomDeFemme + ' avec ' + nbrdEnfants + ' enfants' );


//Exercice 2

var anneeCourante = 2017;
var anneeDeNaissance = prompt('Donnez votre année de naissance');
var age = (anneeCourante - anneeDeNaissance);

console.log('vous avez ' + age + ' ans ');

//Exercice 3

var age = 35;
var agemax = 90;
var denree = 'pain';
var consoParJour = 4;

var consoSurVie = (consoParJour * 365);
var anneerestante = (agemax - age);
var totalDenree = (anneerestante * consoSurVie);

console.log('Il vous reste ' + totalDenree + ' tranches de ' + denree + ' avant d\'atteindre l\'age de ' + agemax + ' ans ' );

//Exercice 4

var result = (1+2)*3+4/2;
// etape 1: 3*3+4/2;
// etape 2: 9+4/2;
// etape 3: 9+2;
// etape 4: 11;
console.log(result);

