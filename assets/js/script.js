// date
let date = moment().format("dddd, MMMM Do");
let compareTime = moment().hours();

$("#currentDay").append(date);

//adding colors to rows based on time
$.each($("textarea"), function () {


    let timeForm = ($(this).siblings()[0].innerText)


    let time = parseInt(timeForm);




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
$(".saveBtn").on("click", function () {

    let saveTimeFull = ($(this).siblings()[0].innerText);

    let saveTime = parseInt(saveTimeFull);

    let saveData = ($(this).siblings()[1].value).trim();

    localStorage.setItem(saveTime, JSON.stringify(saveData));

})

//get info

$.each($("textarea"), function () {

    let timeKey = parseInt(($(this).siblings()[0].innerText))


    let ans = JSON.parse(localStorage.getItem(timeKey))
    console.log(ans)
    console.dir($(".description"))

    $(this).val(ans)


});