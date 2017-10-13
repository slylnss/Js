//Exercice min et max 

var petit = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var grand = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
var addition = petit + grand;

console.log (petit + " + " + grand + " = " + addition);

// Exercice 1

var floatbateau = 10.4;
var coulebateau = Math.floor(10.4);
var volebateau = Math.ceil(10.4);

console.log(coulebateau, volebateau);

// Exercice 2

var alea1 = Math.random()*(100 - 50) + 50;
var alea2 = Math.floor(Math.random());
var alea3 = Math.floor(Math.random()*(10 - 0 +1) + 0);

console.log(alea1, alea2, alea3);

// Exercice 3

var nom =["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var hasard = nom[Math.floor(Math.random()*10)];

console.log(hasard);