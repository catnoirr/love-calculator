var inputElement1 = document.getElementById('middleInput');

inputElement1.addEventListener('input', (e) => {
  var inputValue1 = e.target.value;
  console.log(inputValue1); // outputs the current input value
//   inputElement1.style.fontFamily = 'Lobster,cursive';
  
});
var inputElement2 = document.querySelectorAll('#middleInput')[1];

inputElement2.addEventListener('input', (e) => {
  var inputValue2 = e.target.value;
  console.log(inputValue2); // outputs the current input value
//   inputElement2.style.fontFamily = 'Lobster,cursive';
});

function checkScore(){
  
    var player1Name = inputElement1.value;
    var player2Name = inputElement2.value;
   
   
   if(player1Name=='' || player2Name==''){
       alert("Please enter names first!");
       document.querySelector(".first").innerHTML="Calculate Your Love Score % "
       document.querySelector(".mess").style.display="none"
       document.querySelector(".message").style.display="none"
       return;
   } 


var score = Math.floor(Math.random()*100)+1
document.querySelector(".first").innerHTML = "Your love score is " + score+"%"

var randomMessage1 =["You two are the epitome of love, a true fairytale come true.",
"Your love is a masterpiece, a work of art that will be remembered for eternity.",
"You're the missing piece to each other's puzzle, and now you're complete."]
var randomMessageScore1=Math.floor(Math.random()*randomMessage1.length)
var passRandomMessage1 = randomMessage1[randomMessageScore1]

var randomMessage2 =["You two are a symphony of love, with every note in harmony.",
"Your love is a flame that burns bright, but it needs constant fuel.",
"You're a match made in heaven, but don't forget to make it work on earth."]

var randomMessageScore2=Math.floor(Math.random()*randomMessage2.length)
var passRandomMessage2 = randomMessage2[randomMessageScore2]

var randomMessage3 =["You two are a work of art in progress, and the masterpiece is yet to be revealed.",
"Your love is like a sunrise, it's getting brighter every day.",
"You're on the right path, but don't stop exploring each other."]

var randomMessageScore3=Math.floor(Math.random()*randomMessage3.length)
var passRandomMessage3 = randomMessage3[randomMessageScore3]

var randomMessage4=["You two have a special connection, but it's still in its infancy.",
"Your love is like a seedling, it needs nurturing to grow.",
"The foundation is there, but you need to build on it."]

var randomMessageScore4=Math.floor(Math.random()*randomMessage4.length)
var passRandomMessage4 = randomMessage4[randomMessageScore4]

var randomMessage5=["You two are like two pieces of a puzzle that don't quite fit... yet.",
"The spark is there, but it needs a little fanning to ignite.",
"Your love story is still being written, and the best is yet to come."]

var randomMessageScore5=Math.floor(Math.random()*randomMessage5.length)
var passRandomMessage5 = randomMessage5[randomMessageScore5]


document.querySelector(".message").style.display="block"
document.querySelector(".mess").style.display="block"
document.querySelector(".mess").innerHTML=player1Name+" ❤ "+player2Name;

if(score>80 && score<=100){
  document.querySelector(".message").innerHTML=passRandomMessage1
}
else if(score>60 && score<=80){
document.querySelector(".message").innerHTML=passRandomMessage2;}

else if(score>40 && score<=60){
document.querySelector(".message").innerHTML=passRandomMessage3;}

else if(score>20 && score<=40){
document.querySelector(".message").innerHTML=passRandomMessage4;}
else{
  document.querySelector(".message").innerHTML=passRandomMessage5;
}

inputElement1.value = '';
inputElement2.value = '';

document.querySelector(".second").style.minHeight="fit-content";





}
