let time = dayjs().format("h:mm:ss");
$("#timer").text(time);

$(function () {
  let descriptionEl = $(".description");
  let buttons = $(".saveBtn");
  buttons.on("click", function (event) {
    let parent = $(this).closest(".time-block").attr("id");
    let description = $(this).siblings(".description").val();
    console.log(parent, description);
    localStorage.setItem(parent, description);
  });
  function init() {
    JSON.parse(localStorage.setItem(parent));
  }
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
  // TODO: Add code to display the current date in the header of the page.
});
