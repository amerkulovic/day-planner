let time = dayjs().format("h:mm:ss");
let day = dayjs();
let hour = dayjs().hour();
let currentHour = dayjs().format("HH");

$("#day").text(day);
$("#timer").text(time);

let hoursArray = JSON.parse(localStorage.getItem("Hours")) || [];

function init() {
  // hoursArray.forEach((hourObject) => {
  // let timeDiv = $("time-block").attr("id").split("-")[1];

  //   if (timeDiv == hourObject.parent.split("-")[1]) {
  //     $(".description").text(hourObject.description);
  //   }
  // });

  $(".time-block").each(function () {
    let timeDiv = $(this).attr("id").split("-")[1];
    console.log(timeDiv);

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
    console.log(hourObject.parent.split("-")[1], hourObject.description);

    hoursArray.push(hourObject);

    localStorage.setItem("Hours", JSON.stringify(hoursArray));
    console.log(hoursArray);
  });

  init();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
