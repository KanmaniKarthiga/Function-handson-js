//Q1.Create one function with zero parameter having a console statement;
function first() {
    console.log("Have a good day!")
}
first()

//Q2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
var a;
var b;
function second(a,b){
    console.log(`Sum of ${a},${b} is ${a+b}`)
}
second(3,4)

//Q3. Create one arrow function
const multiplier = (a,b) => {
    console.log(a*b)
}
multiplier(2,2)

//Q4. "Print output:"
var x = 21
var girl = function(){
    console.log(x)
    var x = 20
}
girl() 
// Output is undefined

//Q5."Print output:" 
var x = 21
girl()
console.log(x)
function girl(){
    console.log(x)
    var x = 20
}
// Output is undefined, 21

// Q6. "Print output"
var x = 21
a()
b()
  function a() {
   x = 20;
  console.log(x)
}
 function b() {
    
    x = 40
   console.log(x)
}
// Output is 20,40

//Q7. Write a function that accepts parameter n and returns factorial of n
function factorial(n){
    if(n<0)
    {
        console.log("Factorial for negative values do not exist")
    }
    else if(n===0)
    {
        console.log(`The factorial of ${n} is 1`)
    }
    else
    {
        let ans=0
        for (let i=1; i<=n; i++)
        {
            ans*=i
        }
        console.log(`The factorial of ${n} is ${ans}`)
    }
}
factorial(5)
// Output is "The factorial of 5 is 120"

//Q8. "Guess the Output"
function FindSum(a, b){
    return a + b;
}
function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}
DisplayData("PrepBytes", FindSum(10, 9))

// Output is "i am from Prepbytes and My batch is EA19"

//Q9. "Guess the output"
Abc()
const Abc = function(){
    let value = 20
    console.log(value)
}
// Output brings up an error

// Q10. "Guess the output"
var a = 10
(function (){
    console.log(a)
    var a = 20
})()
// Output brings up errors

//Q11. "Guess the Output"
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`)
    }
}  
const greet_message = greet('EA19')
greet_message("Welcome To PrepBytes")
// Output is "Hi!! EA19, Welcome To PrepBytes"
