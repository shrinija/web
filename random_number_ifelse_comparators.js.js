//learn random number generation


   var n=Math.random();

-->random number that get generated is a       16 decimal place number      between  0 and 0.999999999999...              

//....................................................................

//if you are trying to do something like with dice game

var ondice;
ondice=Math.floor(Math.random()*6);
console.log(ondice);

//our range currently will be between 0 and 5    .... so....

var ondice;
ondice=Math.floor(Math.random()*6)+1;
console.log(ondice);

//.....................................................................


//learn if else
//learn operators

//lets make love calculator

prompt("hey whats your name girl");
prompt("whats your bf name");

console.log("below is info you want...")

var n=Math.floor(Math.random()*100)+1;   //1-100

if(n==100)
{
 console.log("woww your love score is "+ n+"% that's awesome");
}
else if(n<100 && n>=50)
{
 console.log("nice "+n +"% love score");
}
else
{
   console.log(n +"% love score");
}

//.................................................
