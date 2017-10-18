//Création PNJ
let Character = {
	name : "Merlin",
	age  : 115,
	items_to_give : ["Magie", "Pouvoir", "Potion"],
};

don = function(){
		console.log("Vous recevez !");
		for(items_to_give in Character){
			var item = Character.items_to_give[Math.floor(Math.random()*3)];
			};
		return console.log(item);	
	};


don();

//Création Shop

var Armes = {
	description: function(arme, nom_arme, dégats_physique, dégats_magique, minLevel, available){
	this.type = arme;
	this.nom_arme = nom_arme;
	this.dégats_physique = dégats_physique;
	this.dégats_magique = dégats_magique;
	this.minLevel = minLevel;
	this.available = available;
	},

	renvoie: function (){
		var caractéristiques = 
		"Type :" + this.type + 
		"Nom : " + this.nom_arme +
		"Dégats Physique : " +" "+ this.dégats_physique + " "+
		"Dégats Magique : " +" "+ this.dégats_magique + " "+
		"Level Minimum : " +" "+ this.minLevel + " "+
		"Disponible : " +" "+ this.available;
		return caractéristiques;
	}
};

var Epée = Object.create(Armes);
Epée.description('arme', 'Epée', 5, 1, 1, true);
var Baton = Object.create(Armes);
Baton.description('arme', 'Baton', 3, 2, 5, false);
var Dague = Object.create(Armes);
Dague.description('arme', 'Dague', 2, 3, 10, true);

var armes = [];
armes.push(Epée);
armes.push(Baton);
armes.push(Dague);

function affiche() {
armes.forEach(function(Armes){
	console.log(Armes.renvoie());
});
}

affiche();

function armes_dispo() {
	armes.forEach(function(Armes){
		if(Armes.available == true)
		console.log("Armes disponible en magasin : " + Armes.nom_arme);
	});
}

armes_dispo();

function niveau_min() {
	armes.forEach(function(Armes){
		if(Armes.minLevel >= 10)
			console.log("Armes pour level 10 min : "+ Armes.nom_arme, Armes.minLevel);
	});
}

niveau_min();


// Création personnage

let mainCharacter = {
	name : "Miko",
	level: 4,
	life: 100
};

let weapon = {
	name : "Epée",
	dégats_physique: 5,
};

function attack(){
		var dégats_causé = mainCharacter.level*weapon.dégats_physique;
		console.log(mainCharacter.name + " attaque avec " + weapon.name + " et les dégats sont de " + dégats_causé);
	};

attack();


// Bonus Adversaire

function character(name, level, life, name, damage){
	this.name = name;
	this.level = level;
	this.life = life;
	this.weapon ={
		name, damage
	};
}

function opponentCharacter(name, level, life, name, damage){
	this.name = name;
	this.level = level;
	this.life = life;
	this.weapon ={
		name, damage
	};
}

function mainCharacter(name, level, life, name, damage){
	this.name = name;
	this.level = level;
	this.life = life;
	this.weapon ={
		name, damage
	};
}

opponentCharacter.prototype = Object.create(character.prototype);
mainCharacter.prototype = Object.create(character.prototype);









