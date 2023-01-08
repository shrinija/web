-> alert         user can also see
-> console.log( )   only for developer

//................................................................................

--> function part 1
- creating and calling function...
- most basic type of function



function getnumber()
{
  console.log("1");
  console.log("2");
}

getnumber();
getnumber();

//.................................................................................................................

--> function part 2    :  parameters and arguments



 function getmilk(money)
{
  var no_of_bottles;
  no_of_bottles=Math.floor(money/5);
  console.log(" I got " +money +"rs and with that money i bought " +no_of_bottles +" milk bottles");
}

getmilk(20);
getmilk(100);


//.................

//function part3:  Output & return value

    function getmilk(money)
    {
        var no_of_bottles;
        no_of_bottles=Math.floor(money/5);
        var remaining_money=money-no_of_bottles*5;
        console.log(" shrinija got " +money +"rs and with that money she bought " +no_of_bottles +" milk bottles");
       return remaining_money;
    }

var remaining_money=getmilk(102);
console.log("now money remaining with shrinija = "+remaining_money);

 remaining_money=getmilk(150);
console.log("now money remaining with shrinija = "+remaining_money);

//......................................................................................................................
