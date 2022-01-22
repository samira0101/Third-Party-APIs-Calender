

var saveBtn = document.querySelectorAll(".saveBtn");
// live time and date using moment j.s
var presentTime = moment().hour();

var formatDate = moment().format("dddd, MMM Do YYYY, h:mm A");
$("#currentDay").html(formatDate);



function hourUpdater (){
    
$(".time-block").each(function(){
    var presentHour = parseInt($(this).attr("id").split("-")[1]);

    if (presentHour < presentTime ){
        $(this).addClass('past');
    } else if (presentHour === presentTime){
        $(this).addClass('present')
    } else {
        $(this).addClass('future');
    }
})
}
// saving data onto the local storage
$("button").on("click", function (event) {
    event.preventDefault();

    var time = $(this).siblings("input").attr("data");
    var message = $(this).siblings("input").val();
    localStorage.setItem(time, message);
    var schedule = localStorage.getItem(time);
    $(this).siblings("input").text(schedule);
});

// retrieving data from local storage
var myData = localStorage.getItem('time, message');



