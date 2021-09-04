// To Display Date at Top of Page
var date = moment().format("dddd, MMMM do, YYYY");
$("#currentDay").text(date);

$(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

// To update the text-area with data from local storage
$(".text-area").each(function() {
    var id = $(this).attr("id");
    // load saved data from local storage
    $("#" + id + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

// To Add On-Click for the Save Button
var save = $(".save");
save.on("click", save() {
    var time = $(this).parent().attr("id");
    var events = $(this).siblings(".events").val();

    localStorage.setItem(time, schedule);
});
