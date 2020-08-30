// create 

var times = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": ""
};

// display current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// dynamically display backgrounds corresponding to the current hour
var counter = 1;
function checkHour() {
    for (const property in times) {
        var text = "#text" + counter;
        $(text).text(times[property]);
        var time = "#time" + counter;
        var currentTime = moment().format("H");
        var timeString = $(time).text();
        var convertedTime = convertTimes(timeString);
        if(convertedTime < currentTime) {
            $(text).addClass("past");
        }
        else if (convertedTime > currentTime) {
            $(text).addClass("future");
        }
        else {
            $(text).addClass("present");
        }
        counter++;
    }   
};

// convert times to values to be compared against military time
function convertTimes(hourValue) {
    switch(hourValue) {
        case "9 AM": return 9;
        case "10 AM": return 10;
        case "11 AM": return 11;
        case "12 PM": return 12;
        case "1 PM": return 13;
        case "2 PM": return 14;
        case "3 PM": return 15;
        case "4 PM": return 16;
        case "5 PM": return 17;
    }
}

/// save button function
$(".saveBtn").on("click", function(){
    var apptName = $(this).siblings(".col-8").val()
    var apptTime = $(this).siblings(".time-block").children(".hour").text()
    localStorage.setItem(apptTime, apptName)
})

checkHour();
setInterval(function() {
    checkHour();
  }, (1000 * 60) * 5);
