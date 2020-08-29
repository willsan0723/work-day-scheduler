

$("#currentDay").text(moment().format("dddd, MMMM Do"));

console.log(moment().format("H"));

function checkHour() {
if ($(".hour").text < moment().format("H")){
    console.log("past");
}

};

checkHour();
