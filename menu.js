
	var state = "closed";

	function menu (){
		console.log(state);
		

		if (state === "open") {

			document.querySelector(".menu").style.display="none";	

			state = "closed";

		
		} else if (state ==="closed") {
			document.querySelector(".menu").style.display="block";

			state = "open";
		};
	}


