let time = dayjs().format("h:mm:ss");
let day = dayjs();
let hour = dayjs().hour();
//console.log(timeOfDay.innerHTML.substring(0,1));

$("#timer").text(time);
$("#day").text(day);
function init() {}
$(function () {
  let buttons = $(".saveBtn");
  buttons.on("click", function (event) {
    let parent = $(this).closest(".time-block").attr("id");
    let description = $(this).siblings(".description").val();
    localStorage.setItem(parent, description);
    console.log(parent, description);
  });
  init();
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
