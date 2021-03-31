// JavaScript Document
onload = function(){
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