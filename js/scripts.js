// User Interface Logic
$(document).ready(funtion() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("$input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});

// Business Logic
var leapYear = function(year) {
  return false;
};
