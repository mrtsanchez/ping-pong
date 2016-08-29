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

    for(var i = 0; i < results.length; i++) {
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
    $("#split-results").empty();
    $(".error-message").hide();

    var inputNumber = parseInt($("input").val());

    if (inputNumber <= 0) {
     $(".error-message").show();
     $("#error-message").text("Please use only positive numbers");
   } else if (inputNumber > 100){
      pingpong(inputNumber);
      $(".display-title").show();
      $("#split-results").append("<div class='col-md-2'></div>");

      var columnLimit = Math.ceil(inputNumber/8);

      for (var i = 0; i < inputNumber; i+=columnLimit) {
        var section = result.slice(i, i+columnLimit);

        displayResults(section);

        $("#split-results").append("<div class='col-md-1'><span id='display-results"+[i]+"'  class='display-results'></span></div>");

        $("#display-results" + [i]).append(listResults);
      };
      $("#split-results").append("<div class='col-md-2'></div>").fadeIn();
    } else {
        pingpong(inputNumber);
        $(".display-title").show();
        $("#split-results").append("<div class='col-md-2'></div>");
        displayResults(result);
        $("#split-results").append("<div class='col-md-1'><span id='display-results'  class='display-results'></span></div>");
        $("#display-results").append(listResults).slideDown();
    }
  });
});
