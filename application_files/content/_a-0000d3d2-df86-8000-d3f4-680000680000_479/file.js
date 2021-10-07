function isAtLeastFourDigits(fieldID) {
  var input = window.FormAPI.getValue(fieldID).id;
  if (input > 999) {
    return true;
  }
  else {
    return false;
  }
}

function isGreaterThanFiveChars(fieldID){
  var input = window.FormAPI.getValue(fieldID).id;
  if (input.length < 5) {
	return false;
  }
  else {
	return true;
  }
}

function showIfTrue(yesNoComponentId, fieldToHideOrShowId){ 
	
	var value = window.FormAPI.getValue(yesNoComponentId).id;	
	if (value == true ) {
		window.FormAPI.show(fieldToHideOrShowId); 
	} else {
		window.FormAPI.hide(fieldToHideOrShowId); 
	}
} 