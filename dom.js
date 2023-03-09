//.............................................................................................
//inline javascript

<body onload="alert('hello');">
  
</body>

//..............................................................................................
//internal javascript

<script type="text/javascript">
  
  alert("hello");

</script>

//.................................................................................................
//external
--> the position inside the HTML document where we place script tag  --->  at bottom



//..................................................................................................


# DOM  ( document object model )

-->refer W3school

. object
. property
. method




-> document  ka first child          HTML
->HTML ka first child         head
-> ...."....last child       Body


//..................................................................
document.firstElementChild;
document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;
document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML="shrinija";

//..........................................................................................


document.getElementsByClassName("list");

document.getElementsByTagName("Li");  //gives array containg all three list items.. means all items with li property...

document.getElementsByTagName("Li").lenght;   //give length of array with tag Li ..

document.getElementByTagName("Li").style.color="red";  // doesent make any sense...because we are to set color of an array.. need to be more specific

document.getElementByTagName("Li")[2].style.color="red";  //seelct item using its index.. now this will work.. will change color of 2 index array element...


var arr=document.getElementsByTagName("Li");



document.getElementsByClassName("btn")[0].style.color="red";    // when ever you have plural in ..like.. Elements.. then you always need to give index.. even if there is only 1 element 

document.getElementById("title").style.color="red";   // here it is ..Element... as there is only one id with one name...so this syntax is correct..

//............
document.querySelector("li a").style.color="pink";     //more specific  ... this changed colour of that google link
document.querySelector("li").style.color="blue";       // this changed only that dot(bullet point) color.. remember..
document.querySelectorAll("li");   //as there are many list item

document.querySelector(".list a").innerHTML="shrinija";
//.............




-->if method has plural element that is   Elements    then it will give array...




--> selector are elements before {  in css


-->when we use   document.querySelector( );
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn"); 
document.querySelector("#lists a");   // we are looking for an anchortag that is inside something that has an id of lists
document.querySelector("li a");    // we are looking for a which is inside li
document.querySelector("li.list");    //    here no space as li and list are in same line..        <li class="list"> <a href="https://www.google.com">Google</a> </li>


-->when there are more than one elements having same class .. then only first one get selected
--> so to get all 
--> use
document.querySelectorAll( );
example :-  document.querySelectorAll("li");

//......................................................................................................................

-->when you are trying to change style object properties      with js         instade of    css
there are slight changes....(no dashes  and every word after first word have its first letter capital..
                             
--> in js    you   have to give all numbers in the form of string........  
example    :        document.querySelector("h1").style.fontSize="10rem";
                    document.querySelector("h1").style.visibility="hidden";

//............................................................................................................................



//for manipulating style keep this in mind ****************************************************************************

//idea is -> HTML is for content only      CSS to style our website     JavaScript for behaviour   

//but we was trying to change style of each element by js... which is not good practice

document.querySelector("h1").style.color="blue";   // writing like this is not a good practice as we are changing property of element by js..
-->but idealy all of our styles should be inside css

//but if we want to change properties on fly.. we need js.. for that... 

so... for that better way is...........

-->we have a property         classList

document.querySelector("button").classList;        // get list of all class 
document.querySelector("button").classList.add("invisible");     // added invisible class
document.querySelector("button").classList.remove("invisible");   // used to remove class
document.querySelector("button").classList.toggle("invisible");    //if applied then remove if not then apply


//...............................................................................................................................


// for amnipulating text of HTML element************************************************************

document.querySelector("h1").innerHTML;     // if we use inner HTML it will give all of the HTML including other HTML tag
document.querySelector("h1").innerHTML="<em>shrinija</em>";               // so can to this also 
document.querySelector("h1").textContent;     //gives only text


//...............................................................................................................................

//for manipulating attributes

--> just keep in mind ....attribues are all the things that get coured in orange in atom
(everything that goes inside tag .. other than tag name itself is an attribute)

document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.bing.com");

//............................................................................................................................

//****************************************************************************************************************************


//..............................................................................................................................................................

element.addEventListener("click", myFunction);        

$0.addEventListener(input1,input2);      //The addEventListener() method attaches an event handler to an element. takes 2 input..first..what event it should listen to ..and second..what it should do ones that event gets detected 

//...............
document.querySelector("button").addEventListener("click",handleclick);   //see we are not using() if we add()then function gets triggered as soon as event listener get added we wanted to trigger when the click happens.. idea of passing input so that it can be called at latter time

function handleclick(){
  alert("i got clicked");
}

//we can also do like this....the most common way of doing this .......

document.querySelector("button").addEventListener("click",function(){              // by creating anonymous function
  alert("i got clicked");
});
//...............



//.....................................................



Higher Order Function 
--> functions that can take other functions as inputs



//....................................................................................................................................................................
//calculator

function add(num1,num2)
    {
        return num1+num2;
    }

function multiply(num1,num2)
    {
        return num1*num2;
    }

function substract(num1,num2){
    return num1 -num2;
}

function divide(num1,num2)
    {
        return num1/num2;
    }

function calculator(num1,num2,operator)
    {
        return operator(num1,num2);
    }

calculator(6,3,add);
calculator(6,3,multiply);
calculator(6,3,substract);
calculator(6,3,divide);


//......................................................................................................................................


var student={
 name:"shrinja",
 age:2,
 languages:["marathi","hindi","english"]
}


//...........


//Constructor function                   // name of the object that it is going to construct have first letter capital

function HouseKeeper (yearsOfExperience,name,cleaningRepertoire){
 this.yearsOfExperience=yearsOfExperience;
 this.name=name;
 this.cleaningRepertoire=cleaningRepertoire;
}

var HouseKeeper1=new HouseKeeper(9,"tom",["lobby","bedroom"]);
console.log(HouseKeeper1.name);
console.log(HouseKeeper1.cleaningRepertoire);

//....................

//methods

function HouseKeeper (yearsOfExperience,name,cleaningRepertoire){
 this.yearsOfExperience=yearsOfExperience;
 this.name=name;
 this.cleaningRepertoire=cleaningRepertoire;
 this.clean=function(){
  alert("cleaning in progress");
 }
}

HouseKeeper1.clean();

//.........................................

function Audio (fileLocation){
  this.fileLocation=fileLocation;
  this.play=function(){
    //tap into the audio hardware 
    //check the file at fileLocation exists
    //check the file at fileLocation is a sound file
    //play the file at fileLocation
  }
}


var tom1=new Audio("sounds/tom-1.mp3");
tom1.play();

//...............

//callback function



