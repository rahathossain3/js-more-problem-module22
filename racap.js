function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];         //chack every element 
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const largest = [45, 8, 9, 101, 58, 98, 25, 25, 100, 12, 5];
const largestIs = largestElement(largest);
console.log(largestIs);


function smallestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.lenght; i++) {
        const element = numbers[i];         //chack every element 
        if (element < min) {
            min = element;
        }
    }
}