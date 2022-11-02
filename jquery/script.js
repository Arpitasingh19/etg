//NOTE:If link is upper then use
// $(document).ready(function(){
  //$('h1').css("color","red");
//})
//$("h1").css("color","red");
//select all the button
//$("button");
//Select font size css and jquery
//console.log($("h1").css("font-size"));
// $("h1").addClass("big-title margin-50");
//$("h1").text("BYE");
$("button").text("Don't Click Me")//change in html to jquery button
//
//change html content to jq change html content in using jquery
//$("button").html("<em>Hello</em>")
//select image in html
//$("img").attr("src");
//
$("a").attr("href","https://www.yahoo.com");
//apply click and change in css color as well
// $("h1").click(function(){
//   $("h1").css("color","purple");
// });
//if click any button then change all the color one by one
// $("button").click(function(){
//   $("h1").css("color","purple")
// })

//input a value in a text box
// $("input").keypress(function(event){
//   console.log(event.key);
// })
//if select intire document to change input to document
// $("document").keypress(function(event){
//   console.log(event.key);
// })
$(document).keypress(function(event){
  $("h1").text(event.key)
})
////mouseover
$("h1").on("mouseover",function(){
  $("h1").css("color","red")
})
//before
//after
//prepend
//append
//if remove all the button are remove
//$("button").remove();
//if click any button h1 is disappear 
// $("button").on("click",function(){
//   $("h1").hide();
// })
//again its reappear h1 show click
// $("h1").show();
//if click any button show hide your h1 using toggle
// $("button").on("click",function(){
//   $("h1").toggle();
// });
//same thing do in fadeout and fadein using h1 in or out both option in one fadetoggle()
//slide up and slide down option
$("button").on("click",function(){
  $("h1").slideToggle();
});