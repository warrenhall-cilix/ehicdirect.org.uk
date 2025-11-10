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
function checkdate(objName) {
var datefield = objName;
if (chkdate(objName) == false) {
datefield.select();

datefield.focus();
return false;
}
else {
return true;
   }
}

function checkdate1(objName) {
var datefield = objName;
var atelen = datefield.value.length;
if(atelen == 10){
if (chkdate(objName) == false) {
datefield.select();

datefield.focus();
return false;
}
else {
return true;
   }
}} 
function checkdate2(objName) {
var datefield = objName;
var atelen = datefield.value;
if(atelen >1011900){
if (chkdate(objName) == false) {
datefield.select();

datefield.focus();
return false;
}
else {
return true;
   }
}} 

function chkdate(objName) {
var strDatestyle = "EU";
var strDate;
var strDateArray;
var strDay;
var strMonth;
var strYear;
var intday;
var intMonth;
var intYear;
var booFound = false;
var datefield = objName;
var strSeparatorArray = new Array("-"," ","/",".");
var intElementNr;
var err = 0;
var strMonthArray = new Array(12);
strMonthArray[0] = "Jan";
strMonthArray[1] = "Feb";
strMonthArray[2] = "Mar";
strMonthArray[3] = "Apr";
strMonthArray[4] = "May";
strMonthArray[5] = "Jun";
strMonthArray[6] = "Jul";
strMonthArray[7] = "Aug";
strMonthArray[8] = "Sep";
strMonthArray[9] = "Oct";
strMonthArray[10] = "Nov";
strMonthArray[11] = "Dec";
strDate = datefield.value;
if (strDate.length < 1) {
return true;
}
for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
strDateArray = strDate.split(strSeparatorArray[intElementNr]);
if (strDateArray.length != 3) {
err = 1;
return false;
}
else {
strDay = strDateArray[0];
strMonth = strDateArray[1];
strYear = strDateArray[2];
}
booFound = true;
   }
}
if (booFound == false) {
if (strDate.length>5) {
strDay = strDate.substr(0, 2);
strMonth = strDate.substr(2, 2);
strYear = strDate.substr(4);
   }
}
if (strYear.length == 2) {
	if(strYear < 20){
strYear = '20' + strYear;
	}else{
		strYear = '19' + strYear;
	}
}
// US style
if (strDatestyle == "US") {
strTemp = strDay;
strDay = strMonth;
strMonth = strTemp;
}
intday = parseInt(strDay, 10);
if (isNaN(intday)) {
err = 2;
return false;
}
intMonth = parseInt(strMonth, 10);
if (isNaN(intMonth)) {
for (i = 0;i<12;i++) {
if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
intMonth = i+1;
strMonth = strMonthArray[i];
i = 12;
   }
}
if (isNaN(intMonth)) {
err = 3;
return false;
   }
}
intYear = parseInt(strYear, 10);
if (isNaN(intYear)) {
err = 4;
return false;
}
if (intMonth>12 || intMonth<1) {
intMonth = 12;
alert("This is not a valid month");
}
if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
err = 6;
return false;
}
if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
err = 7;
return false;
}
if (intMonth == 2) {
if (intday < 1) {
err = 8;
return false;
}
if (LeapYear(intYear) == true) {
if (intday > 29) {
err = 9;
return false;
}
}
else {
if (intday > 28) {
err = 10;
return false;
}
}
}
if (strDatestyle == "US") {
datefield.value = strMonthArray[intMonth-1] + " " + intday+" " + strYear;
}
else {
	if(intMonth < 10){
		intMonth = '0' + intMonth;
	}
		if(intday < 10){
		intday = '0' + intday;
	}
datefield.value = intday + "/" + intMonth + "/" + strYear;
}
return true;
}
function LeapYear(intYear) {
if (intYear % 100 == 0) {
if (intYear % 400 == 0) { return true; }
}
else {
if ((intYear % 4) == 0) { return true; }
}
return false;
}
function doDateCheck(dob, to) {
var myString = new String(dob.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];
if (Date.parse(verifydate) <= Date.parse(to.value) & Date.parse(verifydate) >= (Date.parse(to.value)-3155692600000)) {
document.getElementById("sixnum").className = "hiddenDiv";
document.getElementById("rest1").className = "visibleDiv1";
document.getElementById("dobreq").className = "hiddenDiv";
document.getElementById("dobok").className = "okMessage";
document.getElementById("spoused").className = "visibleDiv1";
document.getElementById("childd").className = "visibleDiv1";
}
else{
if (dob.value == "" || to.value == "") 
{
	document.getElementById("sixnum").className = "hiddenDiv";
document.getElementById("rest1").className = "hiddenDiv";
document.getElementById("dobok").className = "hiddenDiv";
document.getElementById("dobreq").className = "required";
document.getElementById("spoused").className = "hiddenDiv";
document.getElementById("childd").className = "hiddenDiv";
	}
else{
document.getElementById("sixnum").className = "required";
document.getElementById("rest1").className = "hiddenDiv";
document.getElementById("dobok").className = "hiddenDiv";
document.getElementById("dobreq").className = "hiddenDiv";
document.getElementById("spoused").className = "hiddenDiv";
document.getElementById("childd").className = "hiddenDiv";
}


   }
}
function doDateCheck1(dob, to) {
	var atelen = dob.value.length;
	if(atelen < 7){
		document.getElementById("rest1").className = "hiddenDiv";
		document.getElementById("sixnum").className = "hiddenDiv";
document.getElementById("dobok").className = "hiddenDiv";
document.getElementById("dobreq").className = "required";
		document.getElementById("spoused").className = "hiddenDiv";
		document.getElementById("childd").className = "hiddenDiv";
	}
if(atelen == 10){
	var myString = new String(dob.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];

if (Date.parse(verifydate) <= Date.parse(to.value)) {
document.getElementById("sixnum").className = "hiddenDiv";
document.getElementById("rest1").className = "visibleDiv1";
document.getElementById("dobreq").className = "hiddenDiv";
document.getElementById("dobok").className = "okMessage";
document.getElementById("spoused").className = "visibleDiv1";
document.getElementById("childd").className = "visibleDiv1";
}
else {
if (dob.value == "" || to.value == "") 
 ;
else
document.getElementById("sixnum").className = "required";
document.getElementById("rest1").className = "hiddenDiv";
document.getElementById("dobok").className = "hiddenDiv";
document.getElementById("dobreq").className = "hiddenDiv";
document.getElementById("spoused").className = "hiddenDiv";
document.getElementById("childd").className = "hiddenDiv";

   }}
   if (dob.value.length <10){
	   document.getElementById("rest1").className = "hiddenDiv";
	   document.getElementById("sixnum").className = "hiddenDiv";
document.getElementById("dobok").className = "hiddenDiv";
document.getElementById("dobreq").className = "required";
	   document.getElementById("spoused").className = "hiddenDiv";
	   document.getElementById("childd").className = "hiddenDiv";
   }
}

function doDateCheck2(dobsp, to) {
	var atelen = dobsp.value.length;
	if (atelen != 10){
			var myString = new String(dobsp.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];

document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("dobspok").className = "hiddenDiv";
document.getElementById("dobspreq").className = "required";
   }else if (Date.parse(verifydate) <= Date.parse(to.value)) {
document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("dobspok").className = "okMessage";
document.getElementById("dobspreq").className = "hiddenDiv";
}
else {
document.getElementById("sixnum2").className = "required";
document.getElementById("dobspok").className = "hiddenDiv";
document.getElementById("dobspreq").className = "hiddenDiv";

   }
      
}
function doDateCheck12(dobsp, to) {
	var atelen = dobsp.value.length;
if(atelen == 10){
				var myString = new String(dobsp.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];


if (Date.parse(verifydate) <= Date.parse(to.value) & Date.parse(verifydate) >= (Date.parse(to.value)-3155692600000)) {
document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("dobspok").className = "okMessage";
document.getElementById("dobspreq").className = "hiddenDiv";
}
else {
document.getElementById("sixnum2").className = "required";
document.getElementById("dobspok").className = "hiddenDiv";
document.getElementById("dobspreq").className = "hiddenDiv";

   }
   
   }else {
document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("dobspok").className = "hiddenDiv";
document.getElementById("dobspreq").className = "required";

   }
}

function doDateCheck2(datexp, to) {
	var atelen = dobsp.value.length;
	if (atelen != 10){
			var myString = new String(datexp.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];

document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("datexpok").className = "hiddenDiv";
document.getElementById("datexpreq").className = "required";
   }else if (Date.parse(verifydate) <= Date.parse(to.value)) {
document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("datexpok").className = "okMessage";
document.getElementById("datexpreq").className = "hiddenDiv";
}
else {
document.getElementById("sixnum2").className = "required";
document.getElementById("datexpok").className = "hiddenDiv";
document.getElementById("datexpreq").className = "hiddenDiv";

   }
      
}
function doDateCheck12(dobsp, to) {
	var atelen = dobsp.value.length;
if(atelen == 10){
				var myString = new String(dobsp.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];

if (Date.parse(verifydate) <= Date.parse(to.value) & Date.parse(verifydate) >= (Date.parse(to.value)-3155692600000)) {
document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("dobspok").className = "okMessage";
document.getElementById("dobspreq").className = "hiddenDiv";
}
else {
document.getElementById("sixnum2").className = "required";
document.getElementById("dobspok").className = "hiddenDiv";
document.getElementById("dobspreq").className = "hiddenDiv";

   }
   
   }else {
document.getElementById("sixnum2").className = "hiddenDiv";
document.getElementById("dobspok").className = "hiddenDiv";
document.getElementById("dobspreq").className = "required";

   }
}


function makeDate() {
now = new Date();
var thisMonth = now.getMonth()
var strMonthArray = new Array(12);
strMonthArray[0] = "Jan";
strMonthArray[1] = "Feb";
strMonthArray[2] = "Mar";
strMonthArray[3] = "Apr";
strMonthArray[4] = "May";
strMonthArray[5] = "Jun";
strMonthArray[6] = "Jul";
strMonthArray[7] = "Aug";
strMonthArray[8] = "Sep";
strMonthArray[9] = "Oct";
strMonthArray[10] = "Nov";
strMonthArray[11] = "Dec";

var checksixteen = now.getFullYear() - 16;
return now.getDate() + ' ' + strMonthArray[thisMonth] + ' ' + checksixteen;
}

function showDivsp(divName) {
			document.getElementById("spyes").className = "hiddenDiv";
	if (divName) {
		if(divName == "Yes"){
		document.getElementById("spyes").className = "visibleDiv1";
		}

	}
}
function showDiv(divName) {
	//if value of the box is not nothing and an object with that name exists, then change the class
			document.getElementById("1").className = "hiddenDiv";
		document.getElementById("2").className = "hiddenDiv";
		document.getElementById("3").className = "hiddenDiv";
		document.getElementById("4").className = "hiddenDiv";
		document.getElementById("5").className = "hiddenDiv";
		document.getElementById("6").className = "hiddenDiv";
		document.getElementById("7").className = "hiddenDiv";
		document.getElementById("8").className = "hiddenDiv";
		document.getElementById("9").className = "hiddenDiv";
		document.getElementById("10").className = "hiddenDiv";

	if (divName && document.getElementById(divName)) {
		if(divName == "1"){
		document.getElementById("1").className = "visibleDiv1";
		lastDiv = divName;
		}
				if(divName == "2"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		lastDiv = divName;
		}
						if(divName == "3"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		lastDiv = divName;
		}
										if(divName == "4"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		document.getElementById("4").className = "visibleDiv1";

		lastDiv = divName;
		}
										if(divName == "5"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		document.getElementById("4").className = "visibleDiv1";
		document.getElementById("5").className = "visibleDiv1";
		lastDiv = divName;
		}
										if(divName == "6"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		document.getElementById("4").className = "visibleDiv1";
		document.getElementById("5").className = "visibleDiv1";
		document.getElementById("6").className = "visibleDiv1";
		lastDiv = divName;
		}
										if(divName == "7"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		document.getElementById("4").className = "visibleDiv1";
		document.getElementById("5").className = "visibleDiv1";
		document.getElementById("6").className = "visibleDiv1";
		document.getElementById("7").className = "visibleDiv1";
		lastDiv = divName;
		}
										if(divName == "8"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		document.getElementById("4").className = "visibleDiv1";
		document.getElementById("5").className = "visibleDiv1";
		document.getElementById("6").className = "visibleDiv1";
		document.getElementById("7").className = "visibleDiv1";
		document.getElementById("8").className = "visibleDiv1";
		lastDiv = divName;
		}
										if(divName == "9"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		document.getElementById("4").className = "visibleDiv1";
		document.getElementById("5").className = "visibleDiv1";
		document.getElementById("6").className = "visibleDiv1";
		document.getElementById("7").className = "visibleDiv1";
		document.getElementById("8").className = "visibleDiv1";
		document.getElementById("9").className = "visibleDiv1";
		lastDiv = divName;
		}
								if(divName == "10"){
		document.getElementById("1").className = "visibleDiv1";
		document.getElementById("2").className = "visibleDiv1";
		document.getElementById("3").className = "visibleDiv1";
		document.getElementById("4").className = "visibleDiv1";
		document.getElementById("5").className = "visibleDiv1";
		document.getElementById("6").className = "visibleDiv1";
		document.getElementById("7").className = "visibleDiv1";
		document.getElementById("8").className = "visibleDiv1";
		document.getElementById("9").className = "visibleDiv1";
		document.getElementById("10").className = "visibleDiv1";
		lastDiv = divName;
		}
	}
}
function checkdatea(objName) {
var datefield = objName;
if (chkdate(objName) == false) {
datefield.select();

datefield.focus();
return false;
}
else {
return true;
   }
}

function checkdate1a(objName) {
var datefield = objName;
var atelen = datefield.value.length;
if(atelen == 10){
if (chkdate(objName) == false) {
datefield.select();

datefield.focus();
return false;
}
else {
return true;
   }
}} 
function checkdate2a(objName) {
var datefield = objName;
var atelen = datefield.value;
if(atelen >1011900){
if (chkdate(objName) == false) {
datefield.select();

datefield.focus();
return false;
}
else {
return true;
   }
}} 

function doDateChecka(dob, to, countid) {
	var atelen = dob.value.length;
	var divid = 'eightnum' + countid;

var myString = new String(dob.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];

if (Date.parse(verifydate) >= Date.parse(to.value)) {
document.getElementById(divid).className = "hiddenDiv";
}
else {
if (dob.value == "" || to.value == "") 
 ;
else
document.getElementById(divid).className = "visibleDiv";
   }
}

function doDateCheck1a(dob, to, countid) {
	divnamereq = 'childdob' + countid + 'req';
divnameok = 'childdob' + countid + 'ok';
	var atelen = dob.value.length;
	var divid = 'eightnum' + countid;
if(atelen == 10){
	
		var myString = new String(dob.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];
var currentTime = new Date();

if (Date.parse(verifydate) >= Date.parse(to.value) && Date.parse(verifydate) <= (currentTime.getTime())) {
document.getElementById(divid).className = "hiddenDiv";
document.getElementById(divnameok).className = "okMessage";
document.getElementById(divnamereq).className = "hiddenDiv";
}
else {
document.getElementById(divid).className = "required";
document.getElementById(divnameok).className = "hiddenDiv";
document.getElementById(divnamereq).className = "hiddenDiv";
   }
   }
   else{
	   document.getElementById(divid).className = "hiddenDiv";

document.getElementById(divnameok).className = "hiddenDiv";
document.getElementById(divnamereq).className = "required";
   }
}

function doDateCheck1exp(dob, to) {
	divnamereq = 'datexp' + 'req';
divnameok = 'datexp' + 'ok';
	var atelen = dob.value.length;
	/*var divid = 'eightnum' + countid;*/
if(atelen == 10){
	
		var myString = new String(dob.value);
var myArray = myString.split('/'); 
var verifydate = myArray[1]+'/'+myArray[0]+'/'+myArray[2];
var currentTime = new Date();

if (Date.parse(verifydate)) {
//if (Date.parse(verifydate) >= Date.parse(to.value) && Date.parse(verifydate) <= (currentTime.getTime())) {
/*document.getElementById(divid).className = "hiddenDiv";*/
document.getElementById(divnameok).className = "okMessage";
document.getElementById(divnamereq).className = "hiddenDiv";
}
else {
/*document.getElementById(divid).className = "required";*/
document.getElementById(divnameok).className = "hiddenDiv";
document.getElementById(divnamereq).className = "hiddenDiv";
   }
   }
   else{
	  /* document.getElementById(divid).className = "hiddenDiv";*/

document.getElementById(divnameok).className = "hiddenDiv";
document.getElementById(divnamereq).className = "required";
   }
}



function makeDatea() {
now = new Date();
var thisMonth = now.getMonth()
var strMonthArray = new Array(12);
strMonthArray[0] = "Jan";
strMonthArray[1] = "Feb";
strMonthArray[2] = "Mar";
strMonthArray[3] = "Apr";
strMonthArray[4] = "May";
strMonthArray[5] = "Jun";
strMonthArray[6] = "Jul";
strMonthArray[7] = "Aug";
strMonthArray[8] = "Sep";
strMonthArray[9] = "Oct";
strMonthArray[10] = "Nov";
strMonthArray[11] = "Dec";

var checksixteen = now.getFullYear() - 18;
return now.getDate() + ' ' + strMonthArray[thisMonth] + ' ' + checksixteen;
}

function getLayer(SRC){
	var tDIV = document.getElementById(SRC)             
             tDIV.style.cursor = "hand"
	tDIV.style.visibility = "visible"
}
function floatLayer(SRC){
	var tDIV = document.getElementById(SRC)
             tDIV.style.top = window.event.clientY + 20
	if(window.event.clientX+200>document.body.clientWidth)
	{
		tDIV.style.left = document.body.clientWidth - 200
	}
	else
	{
		tDIV.style.left = window.event.clientX// + 15
	}
}	
function hideLayer(SRC){
	var tDIV = document.getElementById(SRC)
             tDIV.style.visibility='hidden'
}
function cleanInput(data, objName){
var str=data;
str = objName.value = (str.replace(/>/gi, ""));
str = objName.value = (str.replace(/</gi, ""));
str = objName.value = (str.replace(/!/gi, ""));
str = objName.value = (str.replace(/£/gi, ""));
str = objName.value = (str.replace(/$/gi, ""));
str = objName.value = (str.replace(/%/gi, ""));
str = objName.value = (str.replace(/^/gi, ""));
str = objName.value = (str.replace(/"/gi, ""));
str = objName.value = (str.replace(/&/gi, ""));
str = objName.value = (str.replace(/\(/gi, ""));
str = objName.value = (str.replace(/\)/gi, ""));
str = objName.value = (str.replace(/\+/gi, ""));
str = objName.value = (str.replace(/=/gi, ""));
str = objName.value = (str.replace(/'/gi, ""));
str = objName.value = (str.replace(/#/gi, ""));
str = objName.value = (str.replace(/{/gi, ""));
str = objName.value = (str.replace(/}/gi, ""));
str = objName.value = (str.replace(/]/gi, ""));
str = objName.value = (str.replace(/\[/gi, ""));
str = objName.value = (str.replace(/\?/gi, ""));
str = objName.value = (str.replace(/\\/gi, ""));
str = objName.value = (str.replace(/\//gi, ""));


return true;
}

function cleanInputxx(data, objName){
var str=data;
str = objName.value = (str.replace(/>/gi, ""));
str = objName.value = (str.replace(/</gi, ""));
str = objName.value = (str.replace(/!/gi, ""));
str = objName.value = (str.replace(/£/gi, ""));
str = objName.value = (str.replace(/$/gi, ""));
str = objName.value = (str.replace(/%/gi, ""));
str = objName.value = (str.replace(/^/gi, ""));
str = objName.value = (str.replace(/"/gi, ""));
str = objName.value = (str.replace(/&/gi, ""));
str = objName.value = (str.replace(/\(/gi, ""));
str = objName.value = (str.replace(/\)/gi, ""));
str = objName.value = (str.replace(/\+/gi, ""));
str = objName.value = (str.replace(/=/gi, ""));
str = objName.value = (str.replace(/'/gi, ""));
str = objName.value = (str.replace(/#/gi, ""));
str = objName.value = (str.replace(/{/gi, ""));
str = objName.value = (str.replace(/}/gi, ""));
str = objName.value = (str.replace(/]/gi, ""));
str = objName.value = (str.replace(/\[/gi, ""));
str = objName.value = (str.replace(/\?/gi, ""));
str = objName.value = (str.replace(/\\/gi, ""));
str = objName.value = (str.replace(/\//gi, ""));
str = objName.value = (str.replace(/a/gi, ""));
str = objName.value = (str.replace(/A/gi, ""));
str = objName.value = (str.replace(/b/gi, ""));
str = objName.value = (str.replace(/B/gi, ""));
str = objName.value = (str.replace(/c/gi, ""));
str = objName.value = (str.replace(/C/gi, ""));
str = objName.value = (str.replace(/d/gi, ""));
str = objName.value = (str.replace(/D/gi, ""));
str = objName.value = (str.replace(/e/gi, ""));
str = objName.value = (str.replace(/E/gi, ""));
str = objName.value = (str.replace(/f/gi, ""));
str = objName.value = (str.replace(/F/gi, ""));
str = objName.value = (str.replace(/g/gi, ""));
str = objName.value = (str.replace(/G/gi, ""));
str = objName.value = (str.replace(/h/gi, ""));
str = objName.value = (str.replace(/H/gi, ""));
str = objName.value = (str.replace(/i/gi, ""));
str = objName.value = (str.replace(/I/gi, ""));
str = objName.value = (str.replace(/j/gi, ""));
str = objName.value = (str.replace(/J/gi, ""));
str = objName.value = (str.replace(/k/gi, ""));
str = objName.value = (str.replace(/K/gi, ""));
str = objName.value = (str.replace(/l/gi, ""));
str = objName.value = (str.replace(/L/gi, ""));
str = objName.value = (str.replace(/m/gi, ""));
str = objName.value = (str.replace(/M/gi, ""));
str = objName.value = (str.replace(/n/gi, ""));
str = objName.value = (str.replace(/N/gi, ""));
str = objName.value = (str.replace(/o/gi, ""));
str = objName.value = (str.replace(/O/gi, ""));
str = objName.value = (str.replace(/p/gi, ""));
str = objName.value = (str.replace(/P/gi, ""));
str = objName.value = (str.replace(/Q/gi, ""));
str = objName.value = (str.replace(/q/gi, ""));
str = objName.value = (str.replace(/r/gi, ""));
str = objName.value = (str.replace(/R/gi, ""));
str = objName.value = (str.replace(/s/gi, ""));
str = objName.value = (str.replace(/S/gi, ""));
str = objName.value = (str.replace(/t/gi, ""));
str = objName.value = (str.replace(/T/gi, ""));
str = objName.value = (str.replace(/u/gi, ""));
str = objName.value = (str.replace(/U/gi, ""));
str = objName.value = (str.replace(/v/gi, ""));
str = objName.value = (str.replace(/V/gi, ""));
str = objName.value = (str.replace(/w/gi, ""));
str = objName.value = (str.replace(/W/gi, ""));
str = objName.value = (str.replace(/x/gi, ""));
str = objName.value = (str.replace(/X/gi, ""));
str = objName.value = (str.replace(/Y/gi, ""));
str = objName.value = (str.replace(/y/gi, ""));
str = objName.value = (str.replace(/z/gi, ""));
str = objName.value = (str.replace(/Z/gi, ""));

return true;
}


function check2(name, length)
{
	//console.log(name.id);
divnamereq = name.id + 'req';
divnameok = name.id + 'ok';
if(length < 2){
	document.getElementById(divnamereq).className = "required";
	document.getElementById(divnameok).className = "hiddenDiv";
}else{
	document.getElementById(divnameok).className = "okMessage";
	document.getElementById(divnamereq).className = "hiddenDiv";
}
}
function check2x(name, length)
{
divnamereq = name.id + 'req';
divnameok = name.id + 'ok';
if(length < 1){
	document.getElementById(divnamereq).className = "required";
	document.getElementById(divnameok).className = "hiddenDiv";
}else{
	document.getElementById(divnameok).className = "okMessage";
	document.getElementById(divnamereq).className = "hiddenDiv";
}
}
function check9(name, length)
{
divnamereq = name.id + 'req';
divnameok = name.id + 'ok';
if(length < 9){
	document.getElementById(divnamereq).className = "required";
	document.getElementById(divnameok).className = "hiddenDiv";
}else{
	document.getElementById(divnameok).className = "okMessage";
	document.getElementById(divnamereq).className = "hiddenDiv";
}
}
function checke2(name, value)
{
divnamereq = name.id + 'req';
divnameok = name.id + 'ok';
checkemail = document.getElementById('email1').value;
var mail = value;
var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var reg = new RegExp(emailRegEx);
if(!reg.test(mail) || mail == "")
  {
    document.getElementById('email1req').className = "required";
	document.getElementById('email1ok').className = "hiddenDiv";
	document.getElementById('emailreq').className = "required";
	document.getElementById('emailok').className = "hiddenDiv";
  }
  else {
      if(checkemail != value){
	document.getElementById('email1req').className = "required";
	document.getElementById('email1ok').className = "hiddenDiv";
	document.getElementById('emailreq').className = "hiddenDiv";
	document.getElementById('emailok').className = "okMessage";
}else{
	document.getElementById('email1ok').className = "okMessage";
	document.getElementById('email1req').className = "hiddenDiv";
	document.getElementById('emailok').className = "okMessage";
	document.getElementById('emailreq').className = "hiddenDiv";
}    
  }

}

function checke(name, value)
{
divnamereq = name.id + 'req';
divnameok = name.id + 'ok';
checkemail = document.getElementById('email').value;
if(checkemail != value){
	document.getElementById('email1req').className = "required";
	document.getElementById('email1ok').className = "hiddenDiv";
}else{
	document.getElementById('email1ok').className = "okMessage";
	document.getElementById('email1req').className = "hiddenDiv";
}
var mail = document.getElementById('email').value;
var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var reg = new RegExp(emailRegEx);
if(!reg.test(mail) || mail == "")
  {
    document.getElementById('email1req').className = "required";
	document.getElementById('email1ok').className = "hiddenDiv";
	document.getElementById('emailreq').className = "required";
	document.getElementById('emailok').className = "hiddenDiv";
  }


}

function postit(){ //check postcode format is valid
 test = document.getElementById('postcode').value; size = test.length
 test = test.toUpperCase(); //Change to uppercase
 while (test.slice(0,1) == " ") //Strip leading spaces
  {test = test.substr(1,size-1);size = test.length
  }
 document.getElementById('postcode').value = test; //write back to form field
 if (size < 6 || size > 8){ //Code length rule
  document.getElementById('postcodereq').className = "required";
	document.getElementById('postcodeok').className = "hiddenDiv";
  return false;
  }
 if (!(isNaN(test.charAt(0)))){ //leftmost character must be alpha character rule
   document.getElementById('postcodereq').className = "required";
	document.getElementById('postcodeok').className = "hiddenDiv";
   return false;
  }
 if (isNaN(test.charAt(size-3))){ //first character of inward code must be numeric rule
   document.getElementById('postcodereq').className = "required";
	document.getElementById('postcodeok').className = "hiddenDiv";
   return false;
  }
 if (!(isNaN(test.charAt(size-2)))){ //second character of inward code must be alpha rule
   document.getElementById('postcodereq').className = "required";
	document.getElementById('postcodeok').className = "hiddenDiv";
   return false;
  }
 if (!(isNaN(test.charAt(size-1)))){ //third character of inward code must be alpha rule
   document.getElementById('postcodereq').className = "required";
	document.getElementById('postcodeok').className = "hiddenDiv";
   return false;
  }
 count1 = test.indexOf(" ");count2 = test.lastIndexOf(" ");
 if (count1 != count2){//only one space rule
document.getElementById('postcodereq').className = "required";
	document.getElementById('postcodeok').className = "hiddenDiv";
   return false;
  }
document.getElementById('postcodereq').className = "hiddenDiv";
	document.getElementById('postcodeok').className = "okMessage";
return true;
}

function checkrequired(){
	maincking = 0;
	continueck = 0;
	
	mainchekwith = 13;
	//console.log(document.getElementById('applicationtype').value);
	 if(document.getElementById('applicationtype').value == 'Renewal'){
		 mainchekwith = 14;
		 //console.log(document.getElementById('datexpok').className);
		 if(document.getElementById('datexpok').className == "okMessage"){
			document.getElementById('dexpck').className = "hiddenDiv";
			maincking = maincking +1;
		}else{
			document.getElementById('dexpck').className = "";
		}
	 }
	 else {
		 mainchekwith = 13;
		document.getElementById('dexpck').className = "hiddenDiv";
	 }
	
	if(document.getElementById('titleok').className == "okMessage"){
		document.getElementById('titleck').className = "hiddenDiv";
		maincking = maincking +1;
	}else{
		document.getElementById('titleck').className = "";
	}
	
	if(document.getElementById('lastnameok').className == "okMessage"){
		document.getElementById('lastnameck').className = "hiddenDiv";
		maincking = maincking +1;
	}else{
		document.getElementById('lastnameck').className = "";
	}
	if(document.getElementById('firstnameok').className == "okMessage"){
		document.getElementById('firstnameck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('firstnameck').className = "";
	}
		if(document.getElementById('dobok').className == "okMessage"){
		document.getElementById('dobck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('dobck').className = "";
	}
if(document.getElementById('numok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('ninck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('ninck').className = "";
	}
			if(document.getElementById('add1ok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('add1ck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('add1ck').className = "";
	}
				if(document.getElementById('add2ok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('add2ck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('add2ck').className = "";
	}
					if(document.getElementById('add3ok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('add3ck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('add3ck').className = "";
	}
					if(document.getElementById('countyok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('countyck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('countyck').className = "";
	}
					if(document.getElementById('phoneok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('phoneck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('phoneck').className = "";
	}

						if(document.getElementById('postcodeok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('postcodeck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('postcodeck').className = "";
	}
							if(document.getElementById('emailok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('emailck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('emailck').className = "";
	}
								if(document.getElementById('email1ok').className == "okMessage" || document.getElementById('rest1').className != "visibleDiv1"){
		document.getElementById('email1ck').className = "hiddenDiv";
maincking = maincking +1;
	}else{
		document.getElementById('email1ck').className = "";
	}
	if(maincking == mainchekwith){
		document.getElementById('mainck').className = "hiddenDiv";
		continueck = continueck + 1;
	}else{
		document.getElementById('mainck').className = "";
	}
	
	/////////////////////SPOUSE CHECKING
		spcking = 0;
		if(document.getElementById('spouse').value != "Yes"){
			document.getElementById('spouseck').className = "hiddenDiv";
			continueck = continueck+1;
		}else{
			document.getElementById('spouseck').className = "";
			
	if(document.getElementById('lastnamespok').className == "okMessage"){
		document.getElementById('lastnamespck').className = "hiddenDiv";
		spcking = spcking +1;
	}else{
		document.getElementById('lastnamespck').className = "";
	}
	if(document.getElementById('titlespok').className == "okMessage"){
		document.getElementById('titlespck').className = "hiddenDiv";
spcking = spcking +1;
	}else{
		document.getElementById('titlespck').className = "";
	}
	if(document.getElementById('firstnamespok').className == "okMessage"){
		document.getElementById('firstnamespck').className = "hiddenDiv";
spcking = spcking +1;
	}else{
		document.getElementById('firstnamespck').className = "";
	}
		if(document.getElementById('dobspok').className == "okMessage"){
		document.getElementById('dobspck').className = "hiddenDiv";
spcking = spcking +1;
	}else{
		document.getElementById('dobspck').className = "";
	}
									if(document.getElementById('nispok').className == "okMessage"){
		document.getElementById('nispck').className = "hiddenDiv";
spcking = spcking +1;
	}else{
		document.getElementById('nispck').className = "";
	}
			
	if(spcking == 5){
		document.getElementById('spouseck').className = "hiddenDiv";
		continueck = continueck+1;
	}
	
		}
		
		/////////////////////DEPENDENTS CHECKING
		dependcount = document.getElementById('children').value;
		//console.log(dependcount);
depcking =0;
		while (dependcount > 0){
			document.getElementById('dependentck' + dependcount).className = "";
		//console.log('childtitle' + dependcount + 'ok');

		//console.log('childtitleck' + dependcount);

	if(document.getElementById('childtitle' + dependcount + 'ok').className == "okMessage"){
		document.getElementById('childtitleck' + dependcount).className = "hiddenDiv";
		depcking = depcking +1;
	}else{
		
		document.getElementById('childtitleck' + dependcount).className = "";
	}
	if(document.getElementById('childfirstname' + dependcount + 'ok').className == "okMessage"){
		document.getElementById('childfirstnameck' + dependcount).className = "hiddenDiv";
		depcking = depcking +1;
	}else{
		
		document.getElementById('childfirstnameck' + dependcount).className = "";
	}
	if(document.getElementById('childlastname' + dependcount + 'ok').className == "okMessage"){
		document.getElementById('childlastnameck' + dependcount).className = "hiddenDiv";
depcking = depcking +1;
	}else{
		
		document.getElementById('childlastnameck' + dependcount).className = "";
	}
		if(document.getElementById('childdob' + dependcount + 'ok').className == "okMessage"){
		document.getElementById('childdobck' + dependcount).className = "hiddenDiv";
depcking = depcking +1;
	}else{
		document.getElementById('childdobck' + dependcount).className = "";
	} 
									if(document.getElementById('childni' + dependcount + 'ok').className == "okMessage"){
		document.getElementById('childnick' + dependcount).className = "hiddenDiv";
depcking = depcking +1;
	}else{
		document.getElementById('childnick' + dependcount).className = "";
	}
	
	if(depcking == 5){
		document.getElementById('dependentck' + dependcount).className = "hiddenDiv";
		depcking = 0;
		continueck = continueck+1;
	}
	
		dependcount = dependcount-1;
		}
		
dependcountx = document.getElementById('children').value;
		while (dependcountx < 10){
		dependcountx = parseInt(dependcountx)+1;
	
		document.getElementById('dependentck' + dependcountx).className = "hiddenDiv";
		continueck = continueck+1;
		}
		if(continueck == 12){
			
			document.getElementById('continuediv').className = "";
			document.getElementById('checkall').className = "hiddenDiv";
			document.getElementById("continuex").disabled=false;	
		}else{
			document.getElementById('continuediv').className = "hiddenDiv";
			document.getElementById('checkall').className = "";
		}
		
		tcread = document.getElementById('tc').checked;
		dpread = document.getElementById('dp').checked;
		if(tcread & dpread == true){
			document.getElementById('continuebutton').className = "";
		}else{
		document.getElementById('continuebutton').className = "hiddenDiv";	
		}
		

	
}
function submit_check(){
	if(!document.create_account["tc"].checked){
		alert('You must agree to the terms and conditions.');
		return false;
	} 
	if(!document.create_account["dp"].checked){
		alert('You must check that the fee is non-refundable.');
		return false;
	}
		if(document.getElementById('applicationtype').value == 'Lost/Stolen'){
		alert('Regretably we are unable to process Lost/Stolen applications. Please contact the NHS directly on 08445 595 596.');
        return false;
	}
	if(document.getElementById('applicationtype').value == ''){
		alert('Please Select Application Type first.');
		applicationtype.focus();
        return false;
   }
	
		return true;
	}
	
	function stolen(){
		if(document.getElementById('applicationtype').value == ''){
		alert('Please Select Application Type first.');
		applicationtype.focus();
        return false;
   }
		if(document.getElementById('applicationtype').value == 'Lost/Stolen'){
			document.getElementById("expdate").className = "hiddenDiv";
		alert('Regretably we are unable to process Lost/Stolen applications. Please contact the NHS directly on 08445 595 596.');
        return false;
   }
    if(document.getElementById('applicationtype').value == 'Renewal'){
		document.getElementById("expdate").className = "visibleDiv1";
		 return false;
		}
		 if(document.getElementById('applicationtype').value == 'New'){
		document.getElementById("expdate").className = "hiddenDiv";
		 return false;
		}
		 if(document.getElementById('applicationtype').value == 'Add Spouse/Children'){
		document.getElementById("expdate").className = "hiddenDiv";
		 return false;
		}
		
	
		return true;
	}
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=yes,location=0,statusbar=0,menubar=0,resizable=1,width=620,height=310');");
}

function trimNumber(s) {
  while (s.substr(0,1) == '0' && s.length>1) { s = s.substr(1,9999); }
  return s;
}

}