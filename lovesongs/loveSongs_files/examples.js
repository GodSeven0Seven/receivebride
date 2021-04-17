// JavaScript Document
onload = function(){
	document.getElementById("help").onclick = function(){
		var state = document.getElementById("playdiv");
		if(state.style.display=="none"){
			state.style.display = "block";
		}
		else{
			document.getElementById("examples").style.display = "none";
			state.style.display = "none";
		}
	}
	document.getElementById("play").onclick = function(){
		var state = document.getElementById("examples");
		if(state.style.display=="none"){
			state.style.display = "block";
		}
		else{
			state.style.display = "none";
		}
	}	
}