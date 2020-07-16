// REMEMBER: MONTHS IN THE ARRAY ARE ONE MONTH AHEAD AKA JULY=6 AUGUST=7
var events = [
  {'Date': new Date(2020, 6, 7), 'Title': 'Event One'},
  {'Date': new Date(2020, 6, 8), 'Title': 'Event Two', 'Link': 'https://garfield.com'},
  {'Date': new Date(2020, 6, 27), 'Title': 'Event 3', 'Link': 'https:www.google.com.au/#q=anniversary+gifts'},
];

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);


var sunDateSelect = document.getElementsByClassName('eventday')[0];
var monDateSelect = document.getElementsByClassName('eventday')[1];
var satDateSelect = document.getElementsByClassName('eventday')[2];
let cardElement = document.querySelector("div.card");
let backElement = document.querySelector('div.backButton');

sunDateSelect.addEventListener("click", flipCard);
function flipCard(){
  cardElement.classList.toggle("flipped");
}

sunDateSelect.addEventListener("mouseover", function(changeColor)
{changeColor.target.style.color ="gray"; });
sunDateSelect.addEventListener("mouseout", function(changeColor)
{changeColor.target.style.color ="orange"; });

// /*hides wed content on back*/
sunDateSelect.addEventListener("click", showSun);
function showSun() {
  var sun1 = document.getElementById("sunday");
  var mon1 = document.getElementById("monday");
  var sat1 = document.getElementById("saturday");

    sun1.style.visibility = "visible";
    mon1.style.visibility = "hidden";
    sat1.style.visibility = "hidden";
}


/*clicking on "2" card flips and shows Wed content*/
monDateSelect.addEventListener("click", flipCardAgain);
function flipCardAgain(){
  cardElement.classList.toggle("flipped");
}

monDateSelect.addEventListener("mouseover", function(changeColor2)
{changeColor2.target.style.color ="gray"; });
monDateSelect.addEventListener("mouseout", function(changeColor2)
{changeColor2.target.style.color ="orange"; });

/*hides tue content on back*/
monDateSelect.addEventListener("click", showMon);
function showMon() {
  var sun2 = document.getElementById("sunday");
	var mon2 = document.getElementById("monday");
  var sat2 = document.getElementById("saturday");

  	mon2.style.visibility = "visible";
   	sun2.style.visibility = "hidden";
    sat2.style.visibility = "hidden";
  }


  /*clicking on "2" card flips and shows Wed content*/
  satDateSelect.addEventListener("click", flipCardAgain);
  function flipCardAgain(){
    cardElement.classList.toggle("flipped");
  }

  satDateSelect.addEventListener("mouseover", function(changeColor2)
  {changeColor2.target.style.color ="gray"; });
  satDateSelect.addEventListener("mouseout", function(changeColor2)
  {changeColor2.target.style.color ="orange"; });

  /*hides tue content on back*/
  satDateSelect.addEventListener("click", showSat);
  function showSat() {
    var sun3 = document.getElementById("sunday");
  	var mon3 = document.getElementById("monday");
    var sat3 = document.getElementById("saturday");

    	mon3.style.visibility = "hidden";
     	sun3.style.visibility = "hidden";
      sat3.style.visibility = "visible";
    }


  /*when user clicks on "backcontainer" card will flip-back*/
 backElement.addEventListener("click", flipback);

 function flipback(){
   cardElement.classList.toggle("flipped");
 }



/*--------------------------------------------------------------------*/

// // Try do do arry with events
// // if not try to create a seperate page with info from link
//
// //
//
// let wedElement = document.querySelector("th.two");
// let cardElement = document.querySelector("div.card");
// let backElement = document.querySelector('div.backButton');
//
//
//
// // /*clicking on "1" card flips and shows Tue content*/
// sunElement.addEventListener("click", flipCard);
// function flipCard(){
//   cardElement.classList.toggle("flipped");
// }
// //
// // sunElement.addEventListener("mouseover", function(changeColor)
// // {changeColor.target.style.color ="gray"; });
// // sunElement.addEventListener("mouseout", function(changeColor)
// // {changeColor.target.style.color ="white"; });
// /*when card flips - show TUE content*/
//
// // /*hides wed content on back*/
// sunElement.addEventListener("click", showSun);
// function showSun() {
//   var sun1 = document.getElementById("sunday");
//   var mon1 = document.getElementById("monday");
//
//     sun1.style.visibility = "visible";
//     mon1.style.visibility = "hidden";
// }
//
//
// /*--------------------------------------------------------------------*/
//
//
//
//
//
// /*clicking on "2" card flips and shows Wed content*/
// monElement.addEventListener("click", flipCardAgain);
// function flipCardAgain(){
//   cardElement.classList.toggle("flipped");
// }
//
// // monElement.addEventListener("mouseover", function (changeColor)
// // {changeColor.target.style.color ="gray"; });
// // monElement.addEventListener("mouseout", function (changeColor)
// // {changeColor.target.style.color ="white"; });
//
// /*hides tue content on back*/
// monElement.addEventListener("click", showMon);
// function showMon() {
//   var sun2 = document.getElementById("sunday");
// 	var mon2 = document.getElementById("monday");
//
//   	mon2.style.visibility = "visible";
//    	sun2.style.visibility = "hidden";
//   }
// /*--------------------------------------------------------------------*/
//
//
// /*when user clicks on "backcontainer" card will flip-back*/
// backElement.addEventListener("click", flipback);
//
// function flipback(){
//   cardElement.classList.toggle("flipped");
// }
//
//
//  // var element = caleandar(document.getElementsByClassName('.cld-number2'));
