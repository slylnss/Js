//Création PNJ
let Character = {
	name : "Merlin",
	age  : 115,
	items_to_give : ["Magie", "Pouvoir", "Potion"],
};

don = function(){
		console.log("Vous recevez !");
		for(items_to_give in Character){
		Character.items_to_give[Math.floor(Math.random()*3)];
			};
		return Character.items_to_give;	
	};


don();





