/* nightmode */
const root = document.querySelector(':root');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', darkmode);

window.addEventListener('DOMContentLoaded', function () {
root.style.setProperty('--dark-color', '#1c1e21');
root.style.setProperty('--white-color', '#ffffff');
}
)

function darkmode() {
if (toggle.checked !== false) {
root.style.setProperty('--white-color', '#1c1e21');
root.style.setProperty('--dark-color', '#ffffff');

} else {
root.style.setProperty('--dark-color', '#1c1e21');
root.style.setProperty('--white-color', '#ffffff');
}}

/* drag and drop */
function allowDrop(ev) {
ev.preventDefault();}
  
  function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);}
  
  function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));}

/* board buttons */

var side = false

function flip(){
  if (side !== false) {
    flipW()
    side = false
  } else {
    flipB()
    side = true
  }
}

function flipW() { /* change css board to flexbox */ /* add id to rows */
  document.getElementById("rank1").style.flexDirection = "row";
  document.getElementById("rank2").style.flexDirection = "row";
  document.getElementById("rank3").style.flexDirection = "row";
  document.getElementById("rank4").style.flexDirection = "row";
  document.getElementById("rank5").style.flexDirection = "row";
  document.getElementById("rank6").style.flexDirection = "row";
  document.getElementById("rank7").style.flexDirection = "row";
  document.getElementById("rank8").style.flexDirection = "row";
  document.getElementById("c-board").style.flexDirection = "column";
}

function flipB() {
  document.getElementById("c-board").style.flexDirection = "column-reverse";
  document.getElementById("rank1").style.flexDirection = "row-reverse";
  document.getElementById("rank2").style.flexDirection = "row-reverse";
  document.getElementById("rank3").style.flexDirection = "row-reverse";
  document.getElementById("rank4").style.flexDirection = "row-reverse";
  document.getElementById("rank5").style.flexDirection = "row-reverse";
  document.getElementById("rank6").style.flexDirection = "row-reverse";
  document.getElementById("rank7").style.flexDirection = "row-reverse";
  document.getElementById("rank8").style.flexDirection = "row-reverse";
}

/* newsletter */

var mailValue;
function press(){
  mailValue = document.getElementById('automail');
  address = mailValue.value;
  console.log(address); /* for debugging */
}

function validate(){
  var inpObj = document.getElementById("automail");
  if (!inpObj.checkValidity()) {
     console.log("invalid")
}else{redirect()}}

function redirect(){
  var address = mailValue.value;
  var email = "leifgio.villanueva@protonmail.com";
  var mailto_link = 'mailto:' + email + '?subject=Subscription&body=' + address;
  window = window.open(mailto_link, 'emailWindow');
  if (window && window.open && !window.closed)         
      window.close()
}