
   let tueElement = document.querySelector("th.one");
   let wedElement = document.querySelector("th.two");
   let cardElement = document.querySelector("div.card");
   let backElement = document.querySelector('div.backButton');

/*--------------------------------------------------------------------*/

/*clicking on "1" card flips and shows Tue content*/
tueElement.addEventListener("click", flipCard);
function flipCard(){
  cardElement.classList.toggle("flipped");
}

tueElement.addEventListener("mouseover", function (changeColor)
{changeColor.target.style.color ="gray"; });
tueElement.addEventListener("mouseout", function (changeColor)
{changeColor.target.style.color ="white"; });
/*when card flips - show TUE content*/

/*hides wed content on back*/
tueElement.addEventListener("click", showTue);
function showTue() {
  var tue1 = document.getElementById("tuesday");
  var wed1 = document.getElementById("wednesday");

    tue1.style.visibility = "visible";
    wed1.style.visibility = "hidden";
}

/*--------------------------------------------------------------------*/

/*clicking on "2" card flips and shows Wed content*/
wedElement.addEventListener("click", flipCardAgain);
function flipCardAgain(){
  cardElement.classList.toggle("flipped");
}

wedElement.addEventListener("mouseover", function (changeColor)
{changeColor.target.style.color ="gray"; });
wedElement.addEventListener("mouseout", function (changeColor)
{changeColor.target.style.color ="white"; });

/*hides tue content on back*/
wedElement.addEventListener("click", showWed);
function showWed() {
  var wed2 = document.getElementById("wednesday");
	var tue2 = document.getElementById("tuesday");

  	wed2.style.visibility = "visible";
   	tue2.style.visibility = "hidden";
  }
/*--------------------------------------------------------------------*/


/*when user clicks on "backcontainer" card will flip-back*/
backElement.addEventListener("click", flipback);

function flipback(){
  cardElement.classList.toggle("flipped");}




/*after 2 is clicked - show WED content*/
/*function showWed() {
  var xx = document.getElementById("wednesday");
  var yy = document.getElementById("tuesday");
  if (yy.style.visibility === "visible") {
    yy.style.visibility = "hidden";
  } else {
    yy.style.visibility = "visible";
  }
  if (xx.style.visibility === "visible") {
    xx.style.visibility = "hidden";
  } else {
    xx.style.visibility = "visible";
  }
}

/*function showTue() {
  var tue = document.getElementById("tuesday");
  var wed = document.getElementById("wednesday");

  if (tue.style.visibility === "visible") {
    tue.style.visibility = "hidden";
  } else {
    tue.style.visibility = "visible";
  }
  if (wed.style.visibility === "hidden") {
    wed.style.visibility = "visible";
  } else {
    wed.style.visibility = "hidden";
  }
}*/
