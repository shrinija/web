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

document.getElementsByTagName("Li");

var arr=document.getElementsByTagName("Li");



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

--> just keep in mind ....attribues are all the things that egt coured in atom
(everything that goes inside tag .. other than tag name itself is an attribute)

document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.bing.com");

//..............................................................................................................................
