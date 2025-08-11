function getAvarage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}
let numbers = [4, 10, 16];
let avrg = getAvarage(numbers);
console.log("The avarage is: ", avrg);


