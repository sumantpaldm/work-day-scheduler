// date
let date = moment().format("dddd, MMMM Do");
let compareTime = moment().hours();
console.log(compareTime);
$("#currentDay").append(date);

//adding colors to rows based on time
$.each($("textarea"), function () {


    let time = parseInt($(".hour").text())
    console.log(time)


    if (compareTime > time) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (compareTime === time) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    } else if (compareTime < time) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }

});

//save info



