//your JS code here. If required.

const codes = document.querySelectorAll(".code");
codes[0].focus();
codes.forEach((val,ind){
	
	val.addEventListener("input",(e)=>{
		if(e.target.value.length>0 && ind<codes.length-1){
			codes[ind+1].focus();
		}
	})
	val.addEventListener("keydown",(e)=>{
		if(e.key=="Backspace"){
			e.target.value="";
			if(ind>0){
				codes[ind-1].focus();
			}
		}
	})
})