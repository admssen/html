function startTime() {
    updateIP();
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let weekday = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    document.getElementById('hour').innerHTML =  checkTime(hour);
    document.getElementById('minute').innerHTML =  checkTime(minute);
    document.getElementById('date').innerHTML =  checkDay(weekday) + ",&nbsp" + checkMonth(month) + "&nbsp" + date;
    let chrono = document.getElementById("chrono");
    let dnum = '2';
    let accent = '';
    let color = '';
    let spoken = '';
    switch (dnum) {
        case ('0'):
            accent='#000000';
            color='#dee6f7';
            spoken = 'midnight';
            break;
        case ('1'):
            accent='#01062b';
            color='#dee6f7';
            spoken = 'late night';
            break;
        case ('2'):
            accent='#c8c3b0';
            color='#110e13';
            spoken = 'early morning';
            break;
        case ('3'):
            accent='#aaaaaa';
            color='#110e13';
            spoken = 'morning';
            break;
        case ('4'):
            accent='#aaaaaa';
            color='#110e13';
            spoken = 'afternoon';
            break;
        case ('5'):
            accent="#aaaaaa";
            color='#110e13';
            spoken = 'evening';
            break;
        case ('6'):
            accent='#c8c3b0';
            color='#110e13';
            spoken = 'sunset';
            break;
        case ('7'):
            accent='#01062b';
            color='#dee6f7';
            spoken = 'early night';
            break;
    }
    chrono.style.color=color;
    chrono.style.backgroundColor=accent;
    chrono.style.backgroundImage='url("visual/sunmoonh'+dnum+'.svg"), url("visual/panehalf.svg")';
    document.getElementById("daytime").innerHTML = spoken;
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

function updateIP() {
    document.getElementById('ip').innerHTML = "kakashka";
    var q = new XMLHttpRequest();
    q.open('POST', 'ip.php', true);
    q.onload = function() {
        var reply = JSON.parse(this.responseText);
        document.getElementById('ip').innerHTML = reply.output;
    }
    q.onerror = function() {
        document.getElementById('ip').innerHTML = "kakashka";
    }
    q.send()
    document.getElementById('ip').innerHTML = "kakashka";
}
