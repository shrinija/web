// compair below examples  see output on console


//........................................................

var a=0;

 function learn_variable_scope()
{
  var b=22;
  
   a=10;
 
   console.log(b);
   console.log(a);
  
}

learn_variable_scope();

console.log(a);

//console.log(b);        // this will give error



//...........................................................................


var a=0;

 function learn_variable_scope()
{
  var b=22;
  
  var a=10;                                    //here change is made............
 
   console.log(b);
   console.log(a);
  
}

learn_variable_scope();

console.log(a);

//console.log(b);

//....................................................................................
