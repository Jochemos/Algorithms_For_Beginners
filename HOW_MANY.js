//This function will check which character is the most.
const myFun = (input) => {
  let obj = {};

  for(const element of input){
    obj[element] = obj[element] + 1 || 1;
  };

  const x = Object.entries(obj).map(e => e.reverse()).sort().reverse();

  console.log(`The letter ${x[0][1]} are the most numerous, there are ${x[0][0]} of them`);
}

//Enter a string as an argument:
myFun(`asfgrgsggtssg`);
