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

  if (results.length >= 500 || results.length <= 100) {

    listResults1 = document.createElement('ul');

    for(var i = 0; i < result.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults1.appendChild(li);
    }
    return listResults1;

  } else if (results.length > 400){

    listResults1 = document.createElement('ul');
    listResults2 = document.createElement('ul');
    listResults3 = document.createElement('ul');
    listResults4 = document.createElement('ul');

    for(var i = 0; i >100; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(results[i]));
      listResults1.appendChild(li);
    }
    for(var i = 0; i >200; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(results[i]));
      listResults2.appendChild(li);
    }
    for(var i = 0; i >300; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(results[i]));
      listResults3.appendChild(li);
    }
    for(var i = 0; i >400; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(results[i]));
      listResults4.appendChild(li);
    }

    return listResults1, listResults2, listResults3, listResults4;

  } else if (results.length > 300){

      listResults1 = document.createElement('ul');
      listResults2 = document.createElement('ul');
      listResults3 = document.createElement('ul');

      for(var i = 0; i >100; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults1.appendChild(li);
      }
      for(var i = 0; i >200; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults2.appendChild(li);
      }
      for(var i = 0; i >300; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults3.appendChild(li);
      }
      return listResults1, listResults2, listResults3;

  } else {

      listResults1 = document.createElement('ul');
      listResults2 = document.createElement('ul');

      for(var i = 0; i >100; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults1.appendChild(li);
      }
      for(var i = 0; i >200; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults2.appendChild(li);
      }

      return listResults1, listResults2
    }
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
     displayResults(result);
     $(".display-results").show();
     $("#display-results1").append(listResults1);
     $("#display-results2").append(listResults2);
     $("#display-results3").append(listResults3);
     $("#display-results4").append(listResults4);
    }
  });
});
