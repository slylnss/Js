
var hoverMe = document.getElementsByClassName("hoverMe");

for (button of hoverMe) {

	button.addEventListener("mouseover", function(event) {

		this.classList.add("disparition");

    	console.log(event);

	})	

};


var reset = document.getElementById("reset");

reset.addEventListener("click",function () {

  for (button of hoverMe) {

    button.classList.remove("disparition");

  }

})


var xxx = document.getElementById ("axe_x");

xxx.addEventListener ("mousemove", function (event) {

	console.log(event);

	document.getElementById("axe_x").innerHTML = "mousemove X:"+ event.clientY;

	document.getElementById("axe_y").innerHTML = "mousemove X:"+ event.clientX;

})