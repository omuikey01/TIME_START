document.getElementById('start').addEventListener("click", validate);
document.getElementById('stopp').addEventListener("click", stop);

		let hh, mm, ss, nn;
		function validate(){
			hh = document.getElementById("h").innerHTML;
			mm = document.getElementById("m").innerHTML;
			ss = document.getElementById("s").innerHTML;

			if(hh < 0 || hh > 59 && mm < 0 || mm > 59 && ss < 0 || ss > 59){
				alert("Please enter currect hourse, minutes and secounds");
			}
			else{
				start();
			}
		}

		function start(){
			nn = setInterval(work, 1000);	
		}

		function work(){
			ss++;
			document.getElementById("s").innerHTML = ss;
			if(ss == 59){
				ss=0;
				document.getElementById("s").innerHTML = ss;
				mm++;
				if(mm > 59)
				{
					hh++;
					document.getElementById("h").innerHTML = hh;
					mm=0;
					document.getElementById("m").innerHTML = mm;
				}
				document.getElementById("m").innerHTML = mm;
			}
		}

		function stop(){
			clearInterval(nn);
		}