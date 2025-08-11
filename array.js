let arr = [1, 2, 4, 3, 12, 4, 2];
alert("Length: " + arr.length);
arr.unshift(Number(prompt("Enter the number")));
arr.push(Number(prompt("Enter the number")));

alert("Length: " + arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("--------------"); 
arr.shift();
arr.pop();
alert("Length: " + arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}



function filterPositive(arr) {
    let positive = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positive.push(arr[i]);
        }
    }
    return positive;
}
let nums = [-1, 7, 8, -14, 200];
let result = filterPositive(nums);
console.log("Positive numbers: ", result);



let a = 2

if(a==1){
    console.log('+')
}
else if(a==2){
    console.log('-')
}
else if(a==3){
    console.log('*')

}
else{
    console.log('Error')
}

let a = 10

if(a==10){
    console.log('Veronika')
}
else if (a==20){
    console.log('Roma')
}
else{
    console.log('JS')
}



let age = 19
if(age>18){
    console.log('Adult')
}
else{
    console.log('Young')
}



// for(let i = 0; i<20; i++){
//     console.log('Veronika')
// }

// for(let i = 0; i < 25; i ++){
//     console.log(i)
// } 

// function sum(a,b){
//     return a + b;
// }
// function multiply(a,b){
//     return a * b;
// }
// MediaSourceHandle.exports = {sum, multiply }