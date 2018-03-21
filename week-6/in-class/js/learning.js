// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Ryah";
let your_name = "Chris";

if (my_name === "Ryah") {
  renderOutput("That's me!");
} else if (my_name === "Chris")
  renderOutput("That's Chris!");
} else {
  renderOutput("I must be someone else");
}

function helloWorld() {
  renderOutput("Hello World");
}

helloWorld();

functinoary helloName(name) {
  renderOutput("Hello " + name);
}

helloName("Ryah");
helloName("Bob");

function todaysHours(days_hours) {
  renderOutput(days_hours);
}

todayshours("Tuesday: 9a - 5p");

hours.forEach(todaysHours);