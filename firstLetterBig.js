//This alghoritm change all words, which you will pass.
//Take a moment to review this code...
//I used RegExp for the capture what is to be taken into account.

const changeSign = (words) =>{

  const complete = [];

  for(let i=1; i<=words.split(" ").length; i++){
    let regex = /[^a-zA-Z\s]/g;
    let items = words.replace(regex, '').split(" ");
    let changeItems = items[i-1].slice(0, 1).toUpperCase() + items[i-1].toLowerCase().slice(1);

    complete.push(changeItems);
  }
  console.log(complete.join(' '));
}

// enter your sign here:
changeSign(`▷wElcoME t@o my ALGHOriTm!𝄞`);
