document.addEventListener("DOMContentLoaded", function () {
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");
  var day = document.getElementById("day");

  var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  setInterval(function time() {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    // Add leading zeros to hours, minutes, and seconds
    h = h < 10 ? "0" + h : h;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Update elements
    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h;
    minute.innerText = min;
    second.innerText = sec;
  }, 1000); // Update every second
});
