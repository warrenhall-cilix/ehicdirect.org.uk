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
jQuery(".dob").change(function() {
    checkDOB();
  });
jQuery(".dobsp").change(function() {
    checkspDOB();
  });
jQuery(".ExDate").change(function() {
    checkExp();
  });
jQuery("#title").change(function() {
    checkOtherTitle();
  });
jQuery("#sel_add1").change(function() {
    checkOtherAdd();
  });
jQuery("#spouse").change(function() {
    selectSpouse();
  });  
jQuery("#children").change(function() {
	selectChildren();
});  
function checkRenewal() {
		if($("#applicationtype").val() == "Renewal") {
		  	$("#renwalrow").css('display','table-row');
		}
		else{
		  	$("#renwalrow").css('display','none');
    	  	$(".ExDate").val("");
		}
  }
  function checkNhsno() {

if (document.getElementById('nhsno').checked){
         $("#nhshide").css('display','none');
    	   	$(".nin").val("");
}else{
$("#nhshide").css('display','block');
}
}
	
function checkNhsnosp() {
	if (document.getElementById('spnhsno').checked){
         $("#spnhshide").css('display','none');
    	 $(".ninsp").val("");
}else{
$("#spnhshide").css('display','block');
}
  
  }
/*function checkNhsno() {
	  $('#nhsno').click(function () {
    	if($(this).is(":checked")){
        	$("#nhshide").css('display','none');
    	   	$(".nin").val("");
    	}
		else{
			$("#nhshide").css('display','block');
		}
    
 	});
  }
function checkNhsnosp() {
	  $('#spnhsno').click(function () {
    	if($(this).is(":checked")){
        	$("#spnhshide").css('display','none');
    	   	$(".ninsp").val("");
    	}
		else{
			$("#spnhshide").css('display','block');
		}
    
 	});
  }*/
function checkOtherTitle() {
		if($("#title").val() == "Other") {
		  	$("#other_title").css('display','table-row');
		}
		else{
		  	$("#other_title").css('display','none');
    	  	$("#o_title").val("");
		}
  }
function checkOtherAdd() {
		if($("#sel_add1").val() == "Other") {
		  	$("#other_add").css('display','table-row');
		}
		else{
		  	$("#other_add").css('display','none');
    	  	$("#other_add1").val("");
		}
  }
function checkDOB() {
    if(jQuery("#day").val() != "" && jQuery("#month").val() != "" && jQuery("#year").val() != "") {

      today       = new Date();

      minMonth  = today.getMonth() + 1;
      minDay    = today.getDate();
      minYear   = (today.getFullYear() - 16);

      dobYear     = jQuery("#year").val();
      dobMonth    = jQuery("#month").val();
      dobDay      = jQuery("#day").val();

      thealert       = 'Applicant must be over 16. DOB must be on or before: ' + minDay + '/' + minMonth + '/' + minYear + ' (DD/MM/YYYY)';

      if((dobYear > minYear) || (dobYear < (minYear - 122))) {
        return alert(thealert);
      } else if ((dobYear == minYear) && (dobMonth > minMonth)) {
        return alert(thealert);
      } else if ((dobYear == minYear) && (dobMonth == minMonth) && (dobDay > minDay)) {
        return alert(thealert);
      } else {
        jQuery("#dob").val(dobDay + '/' + dobMonth + '/' + dobYear);
      }

    }
  }  
 
function checkspDOB() {
    if(jQuery("#daysp").val() != "" && jQuery("#monthsp").val() != "" && jQuery("#yearsp").val() != "") {

      today       = new Date();

      minMonth  = today.getMonth() + 1;
      minDay    = today.getDate();
      minYear   = (today.getFullYear() - 16);

      dobYear     = jQuery("#yearsp").val();
      dobMonth    = jQuery("#monthsp").val();
      dobDay      = jQuery("#daysp").val();

      thealert       = 'Applicant must be over 16. DOB must be on or before: ' + minDay + '/' + minMonth + '/' + minYear + ' (DD/MM/YYYY)';

      if((dobYear > minYear) || (dobYear < (minYear - 122))) {
        return alert(thealert);
      } else if ((dobYear == minYear) && (dobMonth > minMonth)) {
        return alert(thealert);
      } else if ((dobYear == minYear) && (dobMonth == minMonth) && (dobDay > minDay)) {
        return alert(thealert);
      } else {
        jQuery("#dobsp").val(dobDay + '/' + dobMonth + '/' + dobYear);
      }

    }
  }  
  
function checkExp() {
	var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t1-t2)/(24*3600*1000));
    }

}
	
    if(jQuery("#Exday").val() != "" && jQuery("#Exmonth").val() != "" && jQuery("#Exyear").val() != "") {

      today       = new Date();

      maxMonth  = today.getMonth() + 6;
      maxDay    = today.getDate()+1;
      maxYear   = (today.getFullYear());

      exYear     = jQuery("#Exyear").val();
      exMonth    = jQuery("#Exmonth").val();
      exDay      = jQuery("#Exday").val();
		
		var dString = exMonth+"/"+exDay+"/"+exYear; //mm/dd/yyyy
 
		var d1 = new Date(dString);
		var d2 = new Date();
      thealert       = 'We cannot process your application unless your renewal date is within the next 6 months/180 days. Expirey Date must be on or before: ' + maxDay + '/' + maxMonth + '/' + maxYear + ' (DD/MM/YYYY)';
	 
		if(DateDiff.inDays(d1, d2) > 180){
			return alert(thealert);
		}
       else {
        jQuery("#datexp").val(exDay + '/' + exMonth + '/' + exYear);
      }

    }
  }
  
	function checkNINO(toCheck) {
	
		var exp1 = /^[A-CEGHJ-NOPR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D\s]{1}/i;
		var exp2 = /(^GB)|(^BG)|(^NK)|(^KN)|(^TN)|(^NT)|(^ZZ).+/i;
		
		if(toCheck.match(exp1) && !toCheck.match(exp2))
		  return toCheck.toUpperCase();
		else
		  return false;
	}
function checkSameNin(field, rules, i, options){
		  if ($("#nin").val() == $("#ninsp").val()) {
			 // this allows the use of i18 for the error msgs
			 return options.allrules.sameNin.alertText;
		  }
		}
function checkTHENIN(field, rules, i, options) {
    var ninovalue = field.val();
    var myNINO = ninovalue.replace(/ /g,'');

    if (checkNINO(myNINO)) {
      field.val(checkNINO(myNINO));
    } else if(myNINO.length != 10){
        return options.allrules.validateNin.alertText;
    } else {
    
      var m_strOut = new String(myNINO);
      m_strOut = m_strOut.replace(/[^0-9]/g, '');
    
      if(m_strOut.length != 10){
        return options.allrules.validateNin.alertText;
      } else {
        field.val(myNINO);
      }
    }
  }    
function checkLost(field, rules, i, options){
		  if ($("#applicationtype").val() == 'Lost/Stolen') {
			 // this allows the use of i18 for the error msgs
			 return options.allrules.lostStolen.alertText;
		  }
		}  
  function checkPOST(field, rules, i, options){
     test = field.val(); size = test.length;
     field.val(test);
     while (test.slice(0,1) == " ") //Strip leading spaces
      {
        test = test.substr(1,size-1);size = test.length;
      }
      if (size < 5 || size > 8) {
         //Code length rule
         return options.allrules.validatePostcode.alertText;
      }
      if (!(isNaN(test.charAt(0)))) {
         //leftmost character must be alpha character rule
         return options.allrules.validatePostcode.alertText;
      }
      if (isNaN(test.charAt(size-3))) {
         //first character of inward code must be numeric rule
         return options.allrules.validatePostcode.alertText;
      }
      if (!(isNaN(test.charAt(size-2)))) {
         //second character of inward code must be alpha rule
         return options.allrules.validatePostcode.alertText;
      }
      if (!(isNaN(test.charAt(size-1)))) {
         //third character of inward code must be alpha rule
         return options.allrules.validatePostcode.alertText;
      }
      count1 = test.indexOf(" ");count2 = test.lastIndexOf(" ");
      if (count1 != count2){//only one space rule
         //only one space rule
         return options.allrules.validatePostcode.alertText;
      }
    }
	
function selectSpouse() {
    if(jQuery("#spouse").val() == "Yes") {
      jQuery(".spouse-app-details").css('display','block');
    } else {
      jQuery(".spouse-app-details").css('display','none');
      jQuery(".spouse-app-details input").val("");
      jQuery(".spouse-app-details select").val("");

    }
  }
  
function selectChildren() {
	dependents = jQuery("#children").val();
	$i = 1;
	if(jQuery.isNumeric(dependents)) {
	  while($i <= dependents)
	  {
		jQuery("#dependent" + $i).css("display", "block");
		$i++;
	  }
	  while($i <= 10)
	  {
		jQuery("#dependent" + $i).css("display", "none");
		jQuery("#dependent" + $i + " input").val("");
      jQuery("#dependent" + $i + " select").val("");
		$i++;
	  }
	}
}

jQuery(".childdob").change(function() {

    dependents = jQuery("#children").val();
    $i = 1;
    //alert(dependents);
    while($i <= dependents)
      {
        if(jQuery("#child_day" + $i).val() != "" && jQuery("#child_month" + $i).val() != "" && jQuery("#child_year" + $i).val() != "") {

          today       = new Date();

          minMonth  = today.getMonth() + 1;
          minDay    = today.getDate();
          minYear   = (today.getFullYear() - 19);

          dobYear     = jQuery("#child_year" + $i).val();
          dobMonth    = jQuery("#child_month" + $i).val();
          dobDay      = jQuery("#child_day" + $i).val();

			//console.log(" Min Month: " + minMonth + " MIn Day: " + minDay+ " Min Year: " + minYear);
			//console.log(" dob Month: " + dobMonth + " dob Day: " + dobDay+ " dob Year: " + dobYear);

          thealert       = 'DOB must be on or after: ' + minDay + '/' + minMonth + '/' + minYear + ' (DD/MM/YYYY)';

          if((dobYear < minYear) || (dobYear > (minYear + 19))) {
            return alert(thealert);
          } else if ((dobYear == minYear) && (dobMonth < minMonth)) {
            return alert(thealert);
          } else if ((dobYear == minYear) && (dobMonth == minMonth) && (dobDay < minDay)) {
            return alert(thealert);
          } else {
            jQuery("#childdob" + $i).val(dobDay + '/' + dobMonth + '/' + dobYear);
          }

        }
        $i++;
      }
  });

}