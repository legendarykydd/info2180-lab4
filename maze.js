
window.onload = function() {


	let boundary = document.getElementById("boundary1");

	boundary.addEventListener("mouseover", function(){
		this.className = "boundary youlose";

});

	let boundaries = document.querySelectorAll(".boundary");
	let index1 = -1;

	for (var i = 0; i < boundaries.length; i++) {
		if (boundaries [1].className.indexOf("example") != -1) {
			index1 = i;
		} else {
			boundaries[i].addEventListener("mouseover", function(){
				document.getElementById("status").textContent = "You Lose"
				for (var i = 0; i <boundaries.length; i++) {
					boundaries[i].className = "boundary youlose"
				}
			});
		}
	}


}
