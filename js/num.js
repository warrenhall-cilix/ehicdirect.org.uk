var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
// JavaScript Document
function checkNum(toCheck) {

  var exp1 = /^[A-CEGHJ-NOPR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D\s]{1}/i;
  var exp2 = /(^GB)|(^BG)|(^NK)|(^KN)|(^TN)|(^NT)|(^ZZ).+/i;
	
  if (toCheck.match(exp1) && !toCheck.match(exp2)) 
	  return toCheck.toUpperCase() 
	else
	  return false;
}

  function testNum(numvalue, numdiv) {
    var myNum = numvalue.replace(/ /g,'');
	var numidiv = numdiv.id;
	divnamereq = numdiv.id + 'req';
	divnameok = numdiv.id + 'ok';
	//console.log(divnamereq +" " + divnameok);
    if (checkNum (myNum)) {
     document.getElementById(numidiv).value = checkNum (myNum);
	 	document.getElementById(divnameok).className = "okMessage";
	document.getElementById(divnamereq).className = "hiddenDiv";
   
    }else{
		if(myNum.length != 10){
			 	document.getElementById(divnameok).className = "hiddenDiv";
	document.getElementById(divnamereq).className = "required";
		}else{
			
			var m_strOut = new String(myNum); 
    m_strOut = m_strOut.replace(/[^0-9]/g, ''); 
if(m_strOut.length != 10){
	document.getElementById(divnameok).className = "hiddenDiv";
	document.getElementById(divnamereq).className = "required";
	
}else{

document.getElementById(divnameok).className = "okMessage";
	document.getElementById(divnamereq).className = "hiddenDiv";
	document.getElementById(numidiv).value = myNum;
}
			
			
				 	
		}
	}
   
  }
  
  // JavaScript Document
function checkNum1(toCheck) {

  var exp1 = /^[A-CEGHJ-NOPR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D\s]{1}/i;
  var exp2 = /(^GB)|(^BG)|(^NK)|(^KN)|(^TN)|(^NT)|(^ZZ).+/i;
	
  if (toCheck.match(exp1) && !toCheck.match(exp2)) 
	  return toCheck.toUpperCase() 
	else
	  return false;
}

  function testNum1(numvalue, numdiv) {
    var myNum = numvalue.replace(/ /g,'');
	var numidiv = numdiv.id;
	divnamereq = numdiv.id + 'req';
divnameok = numdiv.id + 'ok';
	
    if (checkNum1 (myNum)) {
     document.getElementById(numidiv).value = checkNum (myNum);
	 	document.getElementById(divnameok).className = "okMessage";
	document.getElementById(divnamereq).className = "hiddenDiv";
   
    }else{
		if(myNum.length != 10){
			 	document.getElementById(divnameok).className = "hiddenDiv";
	document.getElementById(divnamereq).className = "okMessage";
	alert("This is not valid National Insurance or NHS number, please check these details in order to avoid an invalid card being issued.");
		}else{
			
			var m_strOut = new String(myNum); 
    m_strOut = m_strOut.replace(/[^0-9]/g, ''); 
if(m_strOut.length != 10){
	document.getElementById(divnameok).className = "hiddenDiv";
	document.getElementById(divnamereq).className = "okMessage";
	alert("This is not valid National Insurance or NHS number, please check these details in order to avoid an invalid card being issued.");
	
}else{

document.getElementById(divnameok).className = "okMessage";
	document.getElementById(divnamereq).className = "hiddenDiv";
	document.getElementById(numidiv).value = myNum;
}
			
			
				 	
		}
	}
   
  }
}