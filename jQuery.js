
//..........................................................................................
document.querySelector("h1")
jQuery("h1")
$("h1")

//............................................................................................

$( document ).ready(function() {                // if you dont want to use ready ..........include script tag at the end of our website right before closing tag
    console.log( "ready!" );
});


//..................................................................................................................................

//Minify        to reduse some bytes

//.......................................................................................................
document.querySelectorAll("button");
$("button");

//...........................................

$("h1").css("color");          //in this method if you have single vlaue  ..... getting the value
console.log($("h1").css("color"));
$("h1").css("color","blue");   //setting the value

//.........................................

//Manipulating Styles

$("h1").css("font-size","5rem");   //changing that is something releated to css ..inside js.. is dirty..we need to seperate our conserns properly.. keep js for behaviour css for styling HTML for content 
$("h1").addClass("big-title");   // so better add class and style it in stylesheet

$("h1").removeClass("big-title");   //to remove class 

$("h1").addClass("big-title margin-50");  //add multiple class

$("h1").hasClass("margin-50");    //method to check if element has that class or not

//......................................................................................................................

//Manipulate Text with jquery

$("h1").text("bye");


$("button").text("<em>Hey</em>");   //interpret everything as text inside quotation mark
$("button").html("<em>Hey</em>");   //considers the HTML tags

//..........................................................................................................................

// to manipulate Attribue       // img , a , class

$("img").attr("src");   //getting the value of attribute

$("h1").attr("class");

$("img").attr("src","images/shrini.jpg");    //setting the value

$("a").attr("href","https://www.google.com");

//..............................................................................................

//Add Event Listeners

$("h1").click(function(){
  $("h1").css("color","purple");
});











