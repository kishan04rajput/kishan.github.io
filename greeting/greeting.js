var namee = prompt("Please enter your name: ");

if (namee === null || namee === "") {
    namee = "Atul";
}

function liveClock() {
    var currentDateAndTime = new Date();
    var currentDate = currentDateAndTime.toDateString();
    var currentTime = currentDateAndTime.toLocaleTimeString();

    var greeting = document.getElementById("greeting");
    greeting.innerHTML =
        "Hello " +
        namee +
        "<br> " +
        "<i class='fa-solid fa-calendar-days'></i>" +
        " " +
        currentDate +
        "<br>" +
        '<i class="fa-solid fa-clock"></i>' +
        " " +
        currentTime;
}

document.addEventListener("DOMContentLoaded", () => {
    liveClock();

    setInterval(liveClock, 1000);
});
