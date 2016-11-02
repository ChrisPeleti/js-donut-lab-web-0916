//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
console.log("loaded")

var guests
var donuts

var guests = prompt("How many guests are there?")
parseInt(guests)
var donuts = prompt("How many donuts are there?")
parseInt(donuts)

function enoughdonuts(guests, donuts) {
  if( donuts >= guests) {
    alert(`There are ${guests} guests, and ${donuts} donuts. There is enough donuts for everyone! :D`)
  }
  else {
    alert(`There are ${guests} guests, and ${donuts} donuts. There is not enough donuts! D:`)
  }
}

enoughdonuts(guests, donuts)
