
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
	var end = document.getElementById("end");
	var status = document.getElementById("status");

	end.addEventListener("mouseover", function(){
		if(document.querySelectorAll(".youlose").length == 0){
			status.textContent = "You win!";
		}else{
			status.textContent = "You Lose!";
		}
	});

	var start = document.getElementById("start");
	var status = document.getElementById("status");

	start.addEventListener("click", function(){
		var boundary2 = document.querySelectorAll(".boundary");
		if (boundary2.length != 0){
			for(var i = 0; i < boundary2.length; i++){
				if(boundary2[i].className == "boundary example"){
					continue;
				}
				boundary2[i].className = "boundary";
			}

			status.textContent = "Move your mouse over the \"S\" to begin. Click the \"S\" to restart";
		}
	});
	let nocheating = document.getElementById("start");
	let maze = document.getElementById("maze");

	nocheating.addEventListener("mouseout", function(){
		maze.addEventListener("mouseleave", function(){
			for(var i = 0; i < boundaries.length; i++){
				document.getElementById("status").textContent = "You Lose!"
				for(var i = 0; i < boundaries.length; i++){
					if( boundaries[i].className.indexOf("example") == -1){
						boundaries[i].className = "boundary youlose";
					}
				}
			}
		});
	});


}
