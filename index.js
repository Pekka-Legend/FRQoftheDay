var text = document.getElementById("questionName")
var iframe = document.getElementById("pdfHolder")
var list = "162014182217192411211512132310"

var pageStartingValues = [1, 3, 4, 6, 8, 9, 11, 13, 15, 18, 21, 23, 24, 26, 27]

rand = 0;
currentDate = new Date();
previousDate = new Date("2026-03-03T06:00:00-05:00");
currentTime = currentDate.getTime();
previousTime = previousDate.getTime();

console.log(currentTime);
console.log(previousTime);

var difference = (currentTime - previousTime) / 86400000;

console.log(difference);

var index = Math.floor(difference) % (list.length / 2);
var value = Number(list.charAt(index * 2) + list.charAt(index * 2 + 1)) - 10
text.innerText = "AP Physics C: Mechanics " + 
                 "20" + (14 + (Math.floor(value / 3))) + 
                 " #" + ((value % 3) + 1)
iframe.src =
  "pdfjs/web/viewer.html?file=" +
  encodeURIComponent("../../AP_Mech_FRQs_2014-2018_ (2).pdf") +
  "#page=" + pageStartingValues[value] +
  "&zoom=100";