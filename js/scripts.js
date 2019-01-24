var convertRoman = function(number) {
  if (number >= 1 && number <= 3999) {
    var thousands = Math.floor(number / 1000);
    var hundreds = Math.floor((number - (thousands * 1000))/100);
    var tens = Math.floor((number - ((thousands * 1000) + (hundreds * 100)))/10);
    var ones = (number - ((thousands * 1000) + (hundreds * 100) + (tens * 10)));

    var romanNumber = "";
    var numC = "";
    var numX = "";
    var numO = "";

    for(var i = 1; i <= thousands; i++) {
      romanNumber += "M";
    }

    for(var i = 1; i <= hundreds; i++) {
      numC += "C";
    }

    for(var i = 1; i <= tens; i++) {
      numX += "X";
    }

    for(var i =1; i <= ones; i++) {
      numO += "I";
    }

    if(numC.length <= 3) {
      romanNumber += numC;
    }
    else if (numC.length > 3) {
      var hundredsArray = ["CD", "D", "DC", "DCC", "DCCC", "CM"];

      romanNumber += hundredsArray[numC.length - 4];
    }

    if(numX.length <= 3) {
      romanNumber += numX;
    }
    else if (numX.length > 3) {
      var tensArray = ["XL", "L", "LX", "LXX", "LXXX", "XC"];

      romanNumber += tensArray[numX.length - 4];
    }

    if(numO.length <= 3) {
      romanNumber += numO;
    }
    else if (numO.length > 3) {
      var onesArray = ["IV", "V", "VI", "VII", "VIII", "IX"];

      romanNumber += onesArray[numO.length - 4];
    }

    return romanNumber;

  }
  else {
    return "Not a valid number.";
  }

}

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = convertRoman(number);
    $("#result").text(result);
	});
});
