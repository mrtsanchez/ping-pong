// Business Logic

function pingpong(number){

  result = [];
  for (var i = 1; i <= number; i ++) {
		if (i % 15 == 0) {
			result.push("ping-pong");
    } else if (i % 5 == 0) {
      result.push("pong");
    } else if (i % 3 == 0) {
      result.push("ping");
    } else {
      result.push(i);
    }
  };
  return result;
};

function displayResults(results) {

    listResults = document.createElement('ul');

    for(var i = 0; i < result.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults.appendChild(li);
    }
    return listResults;
};


// Frontend Logic

$(document).ready(function() {
  $("form#formInput").submit(function(event) {

    event.preventDefault();
    $("#display-results1").empty();
    $(".error-message").hide();

    var inputNumber = parseInt($("input").val());

    if (inputNumber < 0) {
     $(".error-message").show();
     $("#error-message").text("Please use only positive numbers");
    } else {
     pingpong(inputNumber);
     $(".display-results").show();
     $("#display-results1").append(displayResults(result));
    }
  });
});
