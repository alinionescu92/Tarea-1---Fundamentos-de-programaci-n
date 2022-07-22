
let number1 = parseInt(prompt("Dame un número"));
let number2 = parseInt(prompt("Dame otro número"));
if (number1 == number2){
    let number3 = parseInt(prompt("Dame otro número diferente"));
    if (number1 > number3) console.log(`El mayor es ${number1}`);
    if (number3 > number1) console.log(`El mayor es ${number3}`);
} else {
    if (number1 > number2) console.log(`El mayor es ${number1}`);
    if (number2 > number1) console.log(`El mayor es ${number2}`);
}