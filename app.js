//JavaScript mein conditions ka matlab hota hai ase statements jo kisi condition 
//(shart) ke upar kaam karte hain — agar condition true hai toh kuch code chale,
//  aur agar false hai toh kuch aur ho.
//Yeh programming ka basic concept hai, jise decision making bhi kehte hain.


//Agar condition true hai, tabhi code chalega.

// let age = 18;

// if(age >= 18){
//     console.log("App vote dy sakte hain");
// }

// Condition false ho toh doosra code chalega.

// let age = 16

// if(age >= 18){
//     console.log("App vote de sakte hain");
// }else{
//     console.log("App vote nhi de sakte");
    
// }


// Multiple conditions check karne ke liye.

// let marks = 75;
// if(marks >= 90){
//     console.log("Grade A");    
// }else if(marks >= 70){
//     console.log("Grade B");    
// }else{
//     console.log("Grade C");
// }

//Check the Student Result Marsheet

// let num = +prompt("Enter Your Marks");
// let grad;

// if(num >= 96 && num <= 100){
//     grad = "A+";
//     console.log("Your Grade is ", grad);    
// }else if(num >= 90 && num <= 95){
//     grad = "A";
//     console.log("Your Grade is ", grad);    
// }else if(num >= 80 && num <= 89){
//     grad = "B";
//     console.log("Your Grade is ", grad);    
// }else if(num >= 70 && num <= 79){
//     grad = "C";
//     console.log("Your Grade is ", grad);    
// }else if(num >= 60 && num <= 69){
//     grad = "D";
//     console.log("Your Grade is ", grad);    
// }else if(num >= 50 && num <= 59){
//     grad = "E";
//     console.log("Your Grade is ", grad);    
// }else if(num >= 10 && num < 50){
//     grad = "Fail";
//     console.log("Your are ", grad);
// }else{ 
//     console.log("Invalid number") 
// }


//Ek line mein condition check karne ke liye.

// let age = 20;
// let result = (age >= 18) ? "Adult": "UnAdult"

// console.log(result);   //"Adult"



// Simple Calculator 

let numOne = +prompt("Enter the First Number");
let numTwo = +prompt("Enter the Second Number");

let operators = prompt("+ - * / %");

if(operators === "+"){
    console.log(numOne + numTwo);    
}else if(operators === "-"){
    console.log(numOne - numTwo);    
}else if(operators === "*"){
    console.log(numOne * numTwo);    
}else if(operators === "/"){
    console.log(numOne / numTwo);    
}else if(operators === "%"){
    console.log(numOne % numTwo);    
}else{
    console.log("Invalid Number");
    
}