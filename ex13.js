var chara = document.getElementById('character');

document.addEventListener("keydown", function(event){
var input = event.key;
  switch (input) {
    case '0':
      chara.style.backgroundColor = 'red';
      break;
    case '1':
      chara.style.backgroundColor = 'black';
      break;
    case '2':
      chara.style.backgroundColor = 'yellow';
      break;
    case '3':
      chara.style.backgroundColor = 'blue';
      break;
    case '4':
      chara.style.backgroundColor = 'green';
      break;
    case '5':
      chara.style.backgroundColor = 'purple';
      break;
    case '6':
      chara.style.backgroundColor = 'skyblue';
      break;
    case '7':
      chara.style.backgroundColor = 'brown';
      break;
    case '8':
      chara.style.backgroundColor = 'pink';
      break;
    case '9':
      chara.style.backgroundColor = 'maroon';
      break;
    default :
  }
});

var haut = document.getElementById('up')
var bas = document.getElementById('down')
var droite = document.getElementById('right')
var gauche = document.getElementById('left')

document.addEventListener("keydown", function(event){
var fleche = event.key;
console.log(fleche);
switch (fleche) {
    case 'ArrowUp':
      haut.classList.add('highlight');
      break;
    case 'ArrowLeft':
      gauche.classList.add('highlight');
      break;
    case 'ArrowDown':
      bas.classList.add('highlight');
      break;
    case 'ArrowRight':
      droite.classList.add('highlight');
      break;
    default:
    return;
}
});

document.addEventListener("keyup", function(event){
var fleche = event.key;
console.log(fleche);
switch (fleche) {
    case 'ArrowUp':
      haut.classList.remove('highlight');
      break;
    case 'ArrowLeft':
      gauche.classList.remove('highlight');
      break;
    case 'ArrowDown':
      bas.classList.remove('highlight');
      break;
    case 'ArrowRight':
      droite.classList.remove('highlight');
      break;
    default:
    return;
}
});
