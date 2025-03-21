function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let weekday = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    document.getElementById('hour').innerHTML =  checkTime(hour);
    document.getElementById('minute').innerHTML =  checkTime(minute);
    document.getElementById('date').innerHTML =  checkDay(weekday) + ",&nbsp" + checkMonth(month) + "&nbsp" + date;
    setTimeout(startTime, 4000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
function checkMonth(i) {
    switch (i) {
      case (0):
        i = "January";
        break;
      case (1):
        i = "February";
        break;
      case (2):
        i = "March";
        break;
      case (3):
        i = "April";
        break;
      case (4):
        i = "May";
        break;
      case (5):
        i = "June";
        break;
      case (6):
        i = "July";
        break;
      case (7):
        i = "August";
        break;
      case (8):
        i = "September";
        break;
      case (9):
        i = "October";
        break;
      case (10):
        i = "November";
        break;
      case (11):
        i = "December";
        break;
    }
    return i;
}
function checkDay(i) {
    switch (i) {
      case (1):
        i = "Monday";
        break;
      case (2):
        i = "Tuesday";
        break;
      case (3):
        i = "Wednesday";
        break;
      case (4):
        i = "Thursday";
        break;
      case (5):
        i = "Friday";
        break;
      case (6):
        i = "Saturday";
        break;
      case (0):
        i = "Sunday";
        break;
    }
    return i;
}
