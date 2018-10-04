// body waiting for document to load
$( document ).ready(function() {
    console.log( "ready!" );

/******************************************************************VARIABLES**********************************************************/

var NumToReach= Math.floor(Math.random()* 102)+ 19; //Number you want to reach randomly created
console.log(NumToReach);
var maxRupeeNum= 12; //Max Number the Button can be
var storeNum= 0; //Will store the the numbers for the number to reach
console.log(storeNum);
var wins= 0;
var losses= 0;
/******************************************************************RUPEEVARIABLES*******************************************************/
var Rupee1 = Math.ceil(Math.random()* maxRupeeNum);
var Rupee2 = Math.ceil(Math.random()* maxRupeeNum);
var Rupee3 = Math.ceil(Math.random()* maxRupeeNum);
var Rupee4 = Math.ceil(Math.random()* maxRupeeNum);

//*********Put in HTML***********/
$(".NumReach").html(NumToReach);
$("#rupeeNumR").html(storeNum)

//**************Text Variables*************/
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

//**************************RUPEE ON CLICKS*****************************/
  $(".BlueRupee").on("click", function(){
    console.log("Blue Rupee="+ Rupee1);
    storeNum = storeNum + Rupee1;
    console.log(storeNum);
    $("#rupeeNumR").text(storeNum);
    rupeeClick();
})

$(".RedRupee").on("click", function(){
  console.log("Red Rupee="+Rupee2);
  storeNum = storeNum + Rupee2;
  console.log(storeNum);
  $("#rupeeNumR").text(storeNum);
  rupeeClick();
})

$(".YellowRupee").on("click", function(){
  console.log("Yellow Rupee="+Rupee3);
  storeNum = storeNum + Rupee3;
  console.log(storeNum);
  $("#rupeeNumR").text(storeNum);
  rupeeClick();
})

$(".GreenRupee").on("click", function(){
  console.log("Green Rupee="+Rupee4);
  storeNum = storeNum + Rupee4;
  console.log(storeNum);
  $("#rupeeNumR").text(storeNum);
  rupeeClick();
})

//*******FUNCTIONS*****************/
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//****Reset the game****//
function reset () {
  NumToReach= Math.floor(Math.random()* 102)+ 19; //Number you want to reach randomly created
  $(".NumReach").html(NumToReach); //reset the num to reach
  Rupee1 = Math.ceil(Math.random()* maxRupeeNum);
  Rupee2 = Math.ceil(Math.random()* maxRupeeNum);
  Rupee3 = Math.ceil(Math.random()* maxRupeeNum);
  Rupee4 = Math.ceil(Math.random()* maxRupeeNum);
  storeNum= 0;
  $("#rupeeNumR").html(storeNum)
  
}
//*****Winning Function*****/
function youWinner () {
  alert("You Winner You!")
  wins++
  $("#wins").text("Wins: " + wins);
  reset()
}

//*****Losing Function*****/
function youLoser () {
  alert("You're such a LOSER")
  losses++
  $("#losses").text("Losses: " + losses);
  reset()
}

//***RupeeClick Function*****/
function rupeeClick() {
if (storeNum == NumToReach) {
  youWinner();

}
//***Rupee Loss Function*****/
else if(storeNum > NumToReach){
  youLoser();
}

}

});
