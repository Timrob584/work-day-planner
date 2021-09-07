var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#1");
var two = $("#2");
var three = $("#3");
var four = $("#4");
var five = $("#5");

var hours = [nine, ten, eleven, twelve, one, two, three, four, five];

var time = $(this).parent().attr("id");
var task = $(this).siblings(".task").val();

// To Display Date at Top of Page
var date = moment().format("dddd MMMM do");
$("#currentDay").text(date);

// To Add On-Click for the Save Button
var save = $(".save");
save.on("click", saveItem);

// To Run Save Event
function saveItem(e) {
    e.preventDefault();
    localStorage.setItem(task);
};

// To update the text-area with data from local storage
$(".time-block").each(function() {
  var blockId = $(this).attr("id");
// Load saved data from local storage
  $("#" + blockId + " textarea").text(localStorage.getItem(task));
});

// To set Past, Present, or Future
  function ppf() {
    $(".time-block").each(function() {
      var currentTime = moment().format("h")

      if (currentTime < hours) {
        $(this).addClass("past")
      }
      else if (currentTime === hours) {
        $(this).addClass("present")
      }
      else {
        $(this).addClass("future")
      }
    })
  }

ppf();
