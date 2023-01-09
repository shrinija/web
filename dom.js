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
document.querySelector("li a").style.color="pink";
document.querySelector("li").style.color="blue";
//.............




-->if method has plural element that is   Elements    then it will give array...




--> selector are elements before {  in css


-->when we use   document.querySelector( );
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn"); 
document.querySelector("li a");    // we are looking for a which is inside li


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

