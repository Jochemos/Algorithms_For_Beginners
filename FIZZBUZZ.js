//The following algorithms is to test that your input is number or string...
//If this is number, checks if a number is double by 3, 5 or either way. If string - return string.
//What will happen if your input is nothing?

const funFunction = (num) =>{
  let f = "FIZZ";
  let b = "BUZZ";

  for(let i=0; i<num && !isNaN(num); i++){
    if(num%15 === 0){
      return f+b; //FIZZBUZZ
    }else if(num%3 === 0){
      return f; // FIZZ
    }else if(num%5 === 0){
      return b; // BUZZ
    }else{
      return `no ${f}.. no ${b}..` // no FIZZ.. no BUZZ..
    };
  };

  // this part checks num as contents, if nothing - return information
  for(let i=num; i===undefined; i++){
    return `enter your number`;
  };

  for(let i=num; isNaN(i); i++){
    return `this is string, input number...`;
  };

};

// START CHECKING
let checkItOut = funFunction(/*ENTER YOUR NUMBER*/);
console.log(`${checkItOut}`);
