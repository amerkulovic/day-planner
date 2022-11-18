let time = dayjs().format("h:mm:ss");
let day = dayjs();
let hour = dayjs().hour();
let currentHour = dayjs().format("HH");

$("#day").text(day);
$("#timer").text(currentHour);

let hoursArray = JSON.parse(localStorage.getItem("Hours")) || [];

function init() {
  let index = 0;
  hoursArray.forEach((hourObject) => {
    if ("hour-" + index === hourObject.parent) {
      $(".description").text(hourObject.description);
      console.log(hourObject);
    }
    index++;
  });

  $(".time-block").each(function () {
    let timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour === timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
}

$(function () {
  let buttons = $(".saveBtn");
  buttons.on("click", function (event) {
    let hourObject = {
      parent: $(this).closest(".time-block").attr("id"),
      description: $(this).siblings(".description").val(),
    };
    console.log(hourObject.parent, hourObject.description);

    hoursArray.push(hourObject);

    localStorage.setItem("Hours", JSON.stringify(hoursArray));
    console.log(hoursArray);
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
