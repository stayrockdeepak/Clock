window.onload = function () {
  // This function is to display time
  function clock() {
    var day = new Date();
    var hour = day.getHours();
    var min = day.getMinutes();
    var sec = day.getSeconds();
    var session = "AM";

    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour = `0${hour - 12}`;
      session = "PM";
    }

    var time = `${hour}:${min}:${sec} : ${session}`;

    document.getElementById("clock").innerHTML = time;
  }
  setInterval(clock, 1000);

  // This function is to append text node
  function appendText() {
    document.getElementById("text").innerHTML = "This is clock!!";
  }
  setTimeout(appendText, 1000);
};
