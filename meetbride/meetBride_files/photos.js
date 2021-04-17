// JavaScript Document
var level =  document.getElementById("level1");
var numArr, choices;

onload = function(){
	document.getElementById("play").onclick = function(){
		document.getElementById("index").style.display = "none";
		level.style.display = "block";
		numArr = shuffle(2);
		choices=document.getElementsByClassName("lv1");
		choices[numArr[0]].innerHTML='<img src="./meetBride_files/photos/ans1s.png" onclick="choose(&#34;ans&#34;,0)" />';
		choices[numArr[1]].innerHTML='<img src="./meetBride_files/photos/1-1s.png" onclick="choose(numArr[1],1)" />';
	}	
}

shuffle = function(num){
	numArr=new Array();
	var rdnum, temp=num;	
	for(var i=0;i<num;i++){
		rdnum = Math.floor(Math.random()*num);
		if(rdnum.length==0){
			numArr.push(rdnum);
			temp = rdnum;
		}
		else if(rdnum!=temp && !numArr.toString().match(rdnum)){
			numArr.push(rdnum);
			temp = rdnum;
		}
		else{
			i--;
		}
	}
	return numArr;
}

choose = function(option,numOrder){
	var lv = level.getAttribute("id");
	var btn = document.getElementsByClassName("btn-continue");	
	var res = 0;
	if(lv == "level1")
	{
		btn[0].style.display = "block";
		//var btn1 = btn[0].getElementsByTagName("button")[0];
		if(option=="ans"){
			alert("对了！还算靠谱！");
			choices[numArr[0]].innerHTML='<img src="./meetBride_files/photos/ans1.png" />';
			choices[numArr[1]].innerHTML='<img src="./meetBride_files/photos/1-1.png" />';					
			btn[0].innerHTML="对了！还算靠谱！";			
			res = 1;
		}
		else{
			//choices[numArr[0]].innerHTML='<img src="./meetBride_files/photos/ans2s.png" />';
			//choices[numArr[1]].innerHTML='<img src="./meetBride_files/photos/test1-1s.png" />';
			choices[option].innerHTML='<img src="./meetBride_files/photos/1-1.png" />';
			//choices[option].innerHTML='<img src="./meetBride_files/photos/1-'+ numOrder +'.png" />';
			for(var i=0;i<choices.length;i++){
				choices[numArr[i]].getElementsByTagName("img")[0].removeAttribute("onclick");
			}
			alert("错了！直接打道回府吧！");
			btn[0].innerHTML="错了！直接打道回府吧！";
		}
		btn[0].onclick = function(){ 
				goon(res); 
		}
	}
	else if(lv == "level2"){
		btn[1].style.display = "block";
		if(option=="ans"){
			alert("对了！熟稔有加！");
			choices[numArr[0]].innerHTML='<img src="./meetBride_files/photos/ans2.png" />';
			choices[numArr[1]].innerHTML='<img src="./meetBride_files/photos/2-1.png" />';
			choices[numArr[2]].innerHTML='<img src="./meetBride_files/photos/2-2.png" />';			
			btn[1].innerHTML="对了！熟稔有加！";
			res = 2;
		}
		else{
			choices[option].innerHTML='<img src="./meetBride_files/photos/2-'+ numOrder +'.png" />';
			for(var i=0;i<choices.length;i++){
				choices[numArr[i]].getElementsByTagName("img")[0].removeAttribute("onclick");
			}
			alert("错了！公子可长点心吧！");
			btn[1].innerHTML="错了！公子可长点心吧！";
			//alert("错了！公子可长点心吧！");
		}
		btn[1].onclick = function(){ 
				goon(res); 
		}
	}
	else if(lv == "level3"){
		btn[2].style.display = "block";
		if(option=="ans"){
			alert("对了！了解透彻！");
			choices[numArr[0]].innerHTML='<img src="./meetBride_files/photos/ans3.png" />';
			choices[numArr[1]].innerHTML='<img src="./meetBride_files/photos/3-1.png" />';
			choices[numArr[2]].innerHTML='<img src="./meetBride_files/photos/3-2.png" />';
			choices[numArr[3]].innerHTML='<img src="./meetBride_files/photos/3-3.png" />';
			btn[2].innerHTML="对了！了解透彻！";
			res = 3;
		}
		else{
			choices[option].innerHTML='<img src="./meetBride_files/photos/3-'+ numOrder +'.png" />';
			for(var i=0;i<choices.length;i++){
				choices[numArr[i]].getElementsByTagName("img")[0].removeAttribute("onclick");
			}
			alert("错了！花花世界迷眼吧！");
			btn[2].innerHTML="错了！花花世界迷眼吧！";
		}
		btn[2].onclick = function(){ 
				goon(res); 
		}
	}
}

goon = function(res){
	//alert("选择结果："+res);
	if(res==1){
		level.style.display = "none";
		level = document.getElementById("level2");
		level.style.display = "block";
		numArr = shuffle(3);
		choices = document.getElementsByClassName("lv2");
		choices[numArr[0]].innerHTML='<img src="./meetBride_files/photos/ans2s.png" onclick="choose(&#34;ans&#34;)" />';
		choices[numArr[1]].innerHTML='<img src="./meetBride_files/photos/2-1s.png" onclick="choose(numArr[1],1)" />';
		choices[numArr[2]].innerHTML='<img src="./meetBride_files/photos/2-2s.png" onclick="choose(numArr[2],2)" />';		
	}
	else if(res==2){
		level.style.display = "none";
		level = document.getElementById("level3");
		level.style.display = "block";
		numArr = shuffle(4);
		choices = document.getElementsByClassName("lv3");
		choices[numArr[0]].innerHTML='<img src="./meetBride_files/photos/ans3s.png" onclick="choose(&#34;ans&#34;,0)" />';
		choices[numArr[1]].innerHTML='<img src="./meetBride_files/photos/3-1s.png" onclick="choose(numArr[1],1)" />';
		choices[numArr[2]].innerHTML='<img src="./meetBride_files/photos/3-2s.png" onclick="choose(numArr[2],2)" />';	
		choices[numArr[3]].innerHTML='<img src="./meetBride_files/photos/3-3s.png" onclick="choose(numArr[3],3)" />';	
	}
	else if(res==3){
		level.style.display = "none";
		level = document.getElementById("success");
		level.style.display = "block";
		choices = document.getElementsByClassName("ans");
		choices[0].innerHTML='<img src="./meetBride_files/photos/ans1.png" />';
		choices[1].innerHTML='<img src="./meetBride_files/photos/ans2.png" />';
		choices[2].innerHTML='<img src="./meetBride_files/photos/ans3.png" />';
	}
	else{
		location.reload();
	}
}
