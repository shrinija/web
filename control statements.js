console.log(3+6);
var name=prompt("what is your name");
console.log(name);




alert("hello");




//....................................................................................................................................................

// learn loops 


// ye    js   me thoda alg hai c++ se   function ke bahar ke variables bhi bina pass kiye andar use ho sakte....
//.....parr andar ke bahar nai use kar sakte..function khatam honeke bad uska scope khatam


//.........................................................................................................

//while loop



var output=[];
var count=1;

function fizzBuzz()
{

  while(count<=30)
 {
  if(count%3==0 && count%5==0)
  {
   output.push("fizzbuzz");
  }
  else if(count%3==0)
  {
    output.push("fizz");
  }
  else if(count%5==0)
  {
   output.push("buzz");
  }
  else{
   output.push(count);
  }
  
  count++;
  
}
  
}

fizzBuzz()
console.log(output);

//....................................................................................................................

// for loop

var output=[];
var count=1;

function fizzBuzz()
{

for(;count<=30;count++)
 {
  if(count%3==0 && count%5==0)
  {
   output.push("fizzbuzz");
  }
  else if(count%3==0)
  {
    output.push("fizz");
  }
  else if(count%5==0)
  {
   output.push("buzz");
  }
  else{
   output.push(count);
  }
  
}
  
}

fizzBuzz()
console.log(output);

//.......................................................................................................................
