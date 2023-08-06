
/*leftmenu*/

$(".openNav").click(function(){
  $("#leftMenu").animate({ width:'250px'},50)
 $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
  $("#leftMenu").animate({ width:'0px'},50)
 $("#home-content").animate({marginLeft :'0px'},50)
})













/*section2*/


$(".closebtn").click(function(){
$("#sliderDown").slideToggle("fast",callback);
$("#section2").animate({marginLeft :'0px'},50)
})






















