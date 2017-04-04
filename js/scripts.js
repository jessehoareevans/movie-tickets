var ticketPrice = 0;

function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  var ticketPrice = 0;
  if (this.title === "Zoolander") {
    ticketPrice += 5;
  } else if (this.title === "Star Wars") {
    ticketPrice += 10;
  } else if (this.title === "Office Space") {
    ticketPrice += 15;
  }

  if (this.time === "Matinee") {
    ticketPrice = ticketPrice / 2;
  }

  if (this.age === "Standard") {
    ticketPrice += 3;
  }
  return ticketPrice;
}

$(document).ready(function() {
  $("#movie-info").submit(function(event) {
    var inputtedTitle = $("#movie-name").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();

    var newTicket = new Ticket(inputtedTitle, inputtedTime, inputtedAge);

    $("#output").show();
    $("span#movie-name").text(newTicket.title);
    $("span#movie-time").text(newTicket.time);
    $("span#price-output").text(newTicket.price());

    event.preventDefault();
  })
});
