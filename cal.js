var td = new Date();
var crntmnt = td.getMonth();
var cy = td.getFullYear();
var sy = document.getElementById("year");
var selectMonth = document.getElementById("month");
var monthtw = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var mandyr = document.getElementById("mandyr");
showCalendar(crntmnt, cy);
function pre() {
cy = (crntmnt === 0) ? cy - 1 : cy;
crntmnt = (crntmnt === 0) ?11 :crntmnt - 1;
showCalendar(crntmnt, cy);
}
function nex() {
cy = (crntmnt === 11) ? cy + 1 : cy;
crntmnt = (crntmnt + 1) % 12;
showCalendar(crntmnt, cy);
}
function jumpp() {
cy = parseInt(sy.value);
crntmnt = parseInt(selectMonth.value);
showCalendar(crntmnt, cy);
}
function showCalendar(month, year) {
var firstday = (new Date(year, month)).getDay();
var dysinmnth = 32 - new Date(year, month, 32).getDate();
var tbl = document.getElementById("calendarBody"); // body of the calendar
tbl.innerHTML = "";
mandyr.innerHTML = monthtw[month] + " " + year+" ";
sy.value = year;
selectMonth.value = month;
var date_oncal = 1;
for (var i = 0; i< 6; i++) 
{
  var dateforcalendardateforcalendarrows = document.createElement("tr");
  for (var j = 0; j < 7; j++)
   {
    if (i === 0 && j <firstday) 
    {
      var dateforcalendardateforcalendarcell = document.createElement("td");
      var dateforcalendardateforcalendarcellText = document.createTextNode("");
      dateforcalendardateforcalendarcell.appendChild(dateforcalendardateforcalendarcellText);
      dateforcalendardateforcalendarrows.appendChild(dateforcalendardateforcalendarcell);
    }
    else  if (date_oncal > dysinmnth) {
     break;
    }
    else 
    {
     var dateforcalendardateforcalendarcell = document.createElement("td");
     var dateforcalendardateforcalendarcellText = document.createTextNode(date_oncal);
     if (date_oncal === td.getDate() && year === td.getFullYear() && month === td.getMonth()) {
      dateforcalendardateforcalendarcell.classList.add("bg-info");
      }
     dateforcalendardateforcalendarcell.appendChild(dateforcalendardateforcalendarcellText);
     dateforcalendardateforcalendarrows.appendChild(dateforcalendardateforcalendarcell);
     date_oncal++;
    }
    
   }
  tbl.appendChild(dateforcalendardateforcalendarrows); // appending each dateforcalendardateforcalendarrows into calendar body.
}
}
