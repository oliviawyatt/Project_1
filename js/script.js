/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array of quote objects
let quotes = [

  {quote: "I get angry about things, then go on and work.", source:" Toni Morrison"},
  {quote: "All great achievements require time.", source: " Maya Angelou"},
  {quote: "Don't wait around for other people to be happy for you. Any happiness you get you've got to make yourself.", source:  "Alice Walker"},
  {quote: "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.", source: "Audre Lorde"},
  {quote: "Life is very short and what we have to do must be done in the now.", source: "Audre Lorde"},
  {quote: "Rare is the ministry praying that they would be worthy of the giftedness of Black minds and hearts.", source: "Austin Channing Brown", citation: "I'm Still Here: Black Dignity in a World Made for Whiteness", year: 2018}

];

//array of background colors
let backgroundColor = [
  "#F8B195",
  "#F67280",
  "#C06C84",
  "#6C5B7B",
  "#355C7D"

];

//function to retrieve random quote object
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
    
  

}

//function to retrieve random color from background color array
function getBackgroundColor() {
   let color = Math.floor(Math.random() * backgroundColor.length);
    document.body.style.backgroundColor = backgroundColor[color];
   

  

}

/*     
Function to print quote to page 
also calls background color function
*/
function printQuote() {
  let randomQ = getRandomQuote();
  let htmlstring = "";
  htmlstring += "<p class = 'quote'>" + randomQ.quote;
  htmlstring += "</p>";
  htmlstring += "<p class='source'>" + randomQ.source;
 
  if (randomQ.citation){
    htmlstring += "<span class='citation'>" + randomQ.citation + "</span>";
  }
  if(randomQ.year){
    htmlstring += "<span class='year'>" + randomQ.year + "</span>";
  }
  htmlstring += "</p>";

  document.getElementById("quote-box").innerHTML = htmlstring;
  getBackgroundColor();
}


//Calls print function on button click
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


