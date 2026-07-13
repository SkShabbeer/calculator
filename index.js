
const display = document.getElementById("display");
let history = [];

// ====================================
// Append Values
// ====================================

function appendToDisplay(input) {

    if (display.value === "0" || display.value === "Error") {
        display.value = input;
    }
    else {
        display.value += input;
    }

}

// ====================================
// Clear Display
// ====================================

function clearDisplay() {

    display.value = "0";

}

// ====================================
// Backspace
// ====================================

function backspace() {

    if (display.value.length > 1) {

        display.value = display.value.slice(0, -1);

    }
    else {

        display.value = "0";

    }

}

// ====================================
// Calculate
// ====================================

function calculate() {

    const expression = display.value;

    //  Secret Code
    if (expression === "45#") {

        display.value = " HITMAN 💥";

        history.push("# = HITMAN 💥");

        if (history.length > 2) {
            history.shift();
        }

        document.getElementById("history1").textContent =
            history[0] || "No Calculations";

        document.getElementById("history2").textContent =
            history[1] || "";

        setTimeout(function () {

            display.value = "0";

        }, 2000);

        return;

    }
    if (expression === "143#") {

        display.value = " I LOVE YOU ";

        history.push("# = I LOVE YOU");

        if (history.length > 2) {
            history.shift();
        }

        document.getElementById("history1").textContent =
            history[0] || "No Calculations";

        document.getElementById("history2").textContent =
            history[1] || "";

        setTimeout(function () {

            display.value = "0";

        }, 2000);

        return;

    }
      if (expression === "#143") {

        display.value = " I LOVE YOU ";

        history.push("# = I LOVE YOU");

        if (history.length > 2) {
            history.shift();
        }

        document.getElementById("history1").textContent =
            history[0] || "No Calculations";

        document.getElementById("history2").textContent =
            history[1] || "";

        setTimeout(function () {

            display.value = "0";

        }, 2000);

        return;

    }
        if (expression === "18#") {

        display.value = " KING👑";

        history.push("# = KING👑");

        if (history.length > 2) {
            history.shift();
        }

        document.getElementById("history1").textContent =
            history[0] || "No Calculations";

        document.getElementById("history2").textContent =
            history[1] || "";

        setTimeout(function () {

            display.value = "0";

        }, 2000);

        return;

    }

    try {

        const result = eval(expression);

        display.value = result;

        history.push(expression + " = " + result);

        if (history.length > 2) {
            history.shift();
        }

        document.getElementById("history1").textContent =
            history[0] || "No Calculations";

        document.getElementById("history2").textContent =
            history[1] || "";

    }

    catch {

        display.value = "Error";

        setTimeout(function () {

            display.value = "0";

        }, 1000);

    }

}
// ====================================
// History Toggle
// ====================================

function toggleHistory() {

    const historyBox = document.getElementById("history");
    const copyright = document.getElementById("copyright");

    if (historyBox.style.display === "block") {

        historyBox.style.display = "none";

        // Move copyright back below calculator
        document.getElementById("calculator").after(copyright);

    } else {

        historyBox.style.display = "block";

        // Move copyright below history
        historyBox.after(copyright);

    }

}

// ====================================
// Keyboard Support
// ====================================

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if ("0123456789+-*/.#".includes(key)) {

        appendToDisplay(key);

    }

    else if (key === "Enter") {

        event.preventDefault();
        calculate();

    }

    else if (key === "Backspace") {

        event.preventDefault();
        backspace();

    }

    else if (key === "Escape") {

        clearDisplay();

    }

});

// ====================================
// Typing Animation
// ====================================

const typing = document.getElementById("typing");

const messages = [
    "Calculator",
    "Calculator using HTML",
    "Calculator using HTML & CSS",
    "Calculator using HTML, CSS & JavaScript"
];

let messageIndex = 0;

function changeHeading() {

    typing.textContent = messages[messageIndex];

    if (messageIndex < messages.length - 1) {

        messageIndex++;

        setTimeout(changeHeading, 1500);

    }

}

changeHeading();