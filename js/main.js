
alert('Ти готовий до пригод?Тож розпочнемо гру!');
window.onload = function () {

	document.getElementById("first").onclick = function () {
	        var n = document.getElementById("rect");
	        var p = document.getElementById("first");
	        var a = document.getElementById("menu");
	        var color = 0;
	        setInterval(function () {
	            color = color + 1 % 360;
	            n.style.backgroundColor = "hsl(" + color + ", 100%, 50%)"; // hsl(0, 100%, 50%)
	        
	            a.style.backgroundColor = "hsl(" + color + ", 100%, 50%)"; // hsl(0, 100%, 50%)
	        }, 50);
	        p.style.display = 'none';
	     }
	document.getElementById("first1").onclick = function () {
	        var e = document.getElementById("rect");
	        var a = document.getElementById("menu");
	            e.style.backgroundColor = "yellow";
	            a.style.backgroundColor = "yellow";
	        }
	document.getElementById("first2").onclick = function () {
	        var e = document.getElementById("rect");
	        var a = document.getElementById("menu");
	            e.style.backgroundColor = "blue";
	            a.style.backgroundColor = "blue";
	        }
	document.getElementById("first3").onclick = function () {
			 var x = document.getElementById("myColor").value;
			    var e = document.getElementById("rect");
			    var a = document.getElementById("menu");
			    e.style.backgroundColor = x;
			    a.style.backgroundColor = x;
			}
			/*
	document.getElementById("ikon_1").onclick = function () {
		var g = document.getElementByClassName("game");
		if (g.id = "gamecursor2") {
			document.getElementById("idconteiner2").id = "idconteiner"; 
			document.getElementById("gamecursor2").id = "gamecursor"; 
}
	}
	document.getElementById("ikon_2").onclick = function () {
		var g = document.getElementByClassName("game");
		if (g.id = "gamecursor") {
			document.getElementById("idconteiner").id = "idconteiner2"; 
			document.getElementById("gamecursor").id = "gamecursor2"; 
}
	}
*/
	document.getElementById("ikon_1").onclick = function () 
	{
			document.getElementById("idconteiner4").id = "idconteiner";
			document.getElementById("gamecursor4").id = "gamecursor";
		}
	document.getElementById("ikon_2").onclick = function () 
	{
			document.getElementById("idconteiner").id = "idconteiner2"; 
			document.getElementById("gamecursor").id = "gamecursor2"; 
	}
	document.getElementById("ikon_3").onclick = function () 
	{
			document.getElementById("idconteiner2").id = "idconteiner3"; 
			document.getElementById("gamecursor2").id ="gamecursor3"; 
	}
	document.getElementById("ikon_4").onclick = function () 
	{
			document.getElementById("idconteiner3").id = "idconteiner4"; 
			document.getElementById("gamecursor3").id ="gamecursor4"; 
}

}

