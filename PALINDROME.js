//The main advantage of this algorithm is that it checks the string to half, which contributes to less memory loss.

const isPalindrome = (words) =>{
  const lng = words.length;
  for(let i=0; i<lng/2; i++){
    if(words[i] === words[lng-1-i]){
      return true;
    }else{
      return false;
    }
  }
};

//Enter argument(e.g. civic, refer, level) or else word.
let yourPalindrome = isPalindrome('RACECAR');
console.log(`${yourPalindrome}`);
