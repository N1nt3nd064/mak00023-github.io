window.onload = init;
function init() {
	document.querySelector('#blue').onclick = changeColor;
	document.querySelector('#red').onclick = changeColor2;
	document.querySelector('#show').onclick = showHidetext;
	document.querySelector('#hide').onclick = hidetext;
	document.querySelector('#small').onclick = shrink;
	document.querySelector('#big').onclick = grow;

	function changeColor(){
		document.getElementByClass("content").style.backgroundColor = "#C5CAE9";
	}

	function changeColor2(){
		document.getElementByClass("content").style.backgroundColor = "#ffa291";
	}

	function showHidetext() {
  		var text = document.getElementById("content");
  		if (text.style.display === "none") {
  			text.style.display = "block";
  		} else {
    		x.style.display = "none";
    	}

	function shrink(){
		document.getElementById("content").style.fontsize='12px'
	}

	function grow(){
		document.getElementById("content").style.fontsize='48px'
	}



