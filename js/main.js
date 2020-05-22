
alert('Ти готовий до пригод?Тож розпочнемо гру!');
window.onload = function () {
document.getElementById('id2game__body').hidden = true;
document.getElementById('idgame__body').hidden = false;
document.getElementById('id3game__body').hidden = true;
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
	            e.style.backgroundImage = 'url("../img/moon.jpg")';
	            a.style.backgroundImage = 'url("../img/moon.jpg")';
	        }
	document.getElementById("first2").onclick = function () {
	        var e = document.getElementById("rect");
	        var a = document.getElementById("menu");
	            e.style.backgroundImage = 'url("../img/photo.jpg")';
	            a.style.backgroundImage = 'url("../img/photo.jpg")';
	        }
	document.getElementById("first3").onclick = function () {
			 var x = document.getElementById("myColor").value;
			    var e = document.getElementById("rect");
			    var a = document.getElementById("menu");
			    e.style.backgroundColor = x;
			    a.style.backgroundColor = x;
			    e.style.backgroundImage = "none";
	          a.style.backgroundImage = "none";
			}

	document.getElementById("ikon_1").onclick = function () 
	{
			document.getElementById("idconteiner4").id = "idconteiner1";
			document.getElementById("gamecursor4").id = "gamecursor1";
		}
	document.getElementById("ikon_2").onclick = function () 
	{
			document.getElementById("idconteiner1").id = "idconteiner2"; 
			document.getElementById("gamecursor1").id = "gamecursor2"; 
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
	document.getElementById("D_1").onclick = function () {
		document.getElementById('id2game__body').hidden = false;
		document.getElementById('idgame__body').hidden = true;
		document.getElementById('id3game__body').hidden = true;
	}
	document.getElementById("D_2").onclick = function () {
		document.getElementById('id2game__body').hidden = true;
		document.getElementById('idgame__body').hidden = true;
		document.getElementById('id3game__body').hidden = false;
	}
	document.getElementById("D_3").onclick = function () {
		document.getElementById('id2game__body').hidden = true;
		document.getElementById('idgame__body').hidden = false;
		document.getElementById('id3game__body').hidden = true ;
	}
}

