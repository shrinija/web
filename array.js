//learn array  


//................................................................................................................................................

var guestlist=["shrinija","sakshi","tanka","piya","radha","maya"];

console.log(guestlist);                            //will give all the guest names and total guest count

console.log(guestlist.length);                     // length of array

console.log(guestlist[0]);                         // to get perticular guest/element

console.log(guestlist[4]);

console.log(guestlist.includes("tanka"));                   // tell us if array contains this element or not

console.log(guestlist.includes("tina"));


// lets ask guest name and then check if we invited them or not

var name=prompt("hey there whats your name");

if(guestlist.includes(name))
{
 console.log("hey "+name +" welcome to party");
}
else
{
 console.log("hey sorry but not invited ")
}

//............................................................................................................................................

//FizzBuzz game ................ to learn conditionals and array .........................

var output=[];
var count=1;

function fizzBuzz()
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
  console.log(output);
  
 }

//................................................................................................



