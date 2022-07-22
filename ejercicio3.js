let arrayOfNumbers = [7,100,-2,20,175,48,123,9,235];
let oddNumbers = [];
let higherThan100Numbers = [];
for(let i=0;i<arrayOfNumbers.length;i++) {
    if (arrayOfNumbers[i]%2==1) oddNumbers.push(arrayOfNumbers[i]);
    if (arrayOfNumbers[i]>=100) higherThan100Numbers.push(arrayOfNumbers[i]);
} console.log(`El número total de impares es ${oddNumbers.length} y mayores que 100 es ${higherThan100Numbers.length}`);