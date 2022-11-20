let time = dayjs().format("h:mm:ss");
let day = dayjs();
let hour = dayjs().hour();
let currentHour = dayjs().format("HH");

$("#day").text(day);
$("#timer").text(time);

let hoursArray = JSON.parse(localStorage.getItem("Hours")) || [];

function init() {
  for (let i = 0; i < hoursArray.length; i++) {
    let time = hoursArray[i].parent.split("-")[1];
    $(`#${time}`).val(hoursArray[i].description);
  }
  // let timeBlock = $(".time-block");

  // for (let i = 0; i < timeBlock.length; i++) {
  //   let timeDiv = timeBlock[i].getAttribute("id").split("-")[1];
  //   if (currentHour === timeDiv) {
  //     timeBlock[i].classList.add("present");
  //   } else if (currentHour > timeDiv) {
  //     timeBlock[i].classList.add("past");
  //   } else {
  //     timeBlock[i].classList.add("future");
  //   }
  // }

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

    hoursArray.push(hourObject);

    localStorage.setItem("Hours", JSON.stringify(hoursArray));
  });

  init();
});
