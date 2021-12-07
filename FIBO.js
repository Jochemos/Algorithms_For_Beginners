//This algorithm at the start as parametr takes the number of items, which recursion will execute.
//The variable ${startNum} specifies the first two starting numbers.

const fibonacciMax = (max) =>{
  let startNum = [0, 1];
  for(let i=startNum[1]; i<max; i++){
    let nextNum = startNum[i]+startNum[i-1];
    startNum.push(nextNum);
  }
  console.log(startNum.join(", "));
}

//Enter the number of items as argument.
fibonacciMax(10);
