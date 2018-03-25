"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}

function dailyHours(hours) {
  
}

let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];

let original_name = "Monday: 9a - 9p",
let parts_of_name = hours.split(": ");
renderOutput(days[0], hours[0]);

days.forEach(displayDays)
hours.forEach(displayHours);

 if (hours.includes('Monday')('Tuesday')('Wednesday')('Thursday')('Friday')('Saturday')) {
        output = " On" + days + " the hours are" + hours;
    } else {
        output = " On Sunday the library is" + hours;
    }

dailyHours(hours);