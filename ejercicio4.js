const min = 1;
const max = 6;
let die1;
let die2; 
let sum; 
let newarray = [];
let media = 0;
let sumOfResult = 0;
for (let i=0; i<6000; i++){
    die1 = Math.floor(Math.random()*(max-min+1)+min);
    die2 = Math.floor(Math.random()*(max-min+1)+min);
    sum = die1 + die2;
    newarray.push(sum);
    sumOfResult += newarray[i];
    media = (sumOfResult/6000).toFixed(2);
} console.log(`La media de los valores es ${media}`);