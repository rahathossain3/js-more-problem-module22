/*
function animalCount(miles) {
    const animalDensityFirst10Miles = 10;               // 1st par Miles animals
    const animalDensitySecond10Miles = 50;               // 2nd par Miles animals
    const animalDensityRestMiles = 100;               // 3rd par Miles animals


    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;  // 1st miles & animals count
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;       // first 10 miles animals
        const restMailes = miles - 10;                                  // 2nd miles count & remove 1st 10 miles
        const secondDenseAnimals = restMailes * animalDensitySecond10Miles; // total 2nd mile & animals count

        const totalAnimals = firstDenseAnimals + secondDenseAnimals;     // add first & second miles total animals

        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;       // first 10 miles animals
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;       // 2nd 10 miles animals
        const restMailes = miles - 20;                  // 3rd  miles count & remove 1st & 2nd 20 miles
        const restDenseAnimal = restMailes * animalDensityRestMiles

        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimal; // total mile & animals count

        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);

*/


function add(num) {
    const first = 5;
    const second = 10;
    const rest = 15;

    if (num <= 10) {
        const total = num * first;
        return total;
    }
    else if (num <= 20) {
        const firstTotal = 10 * first;
        const secondNum = num - 10;
        const secondTotal = secondNum * second;
        const totalNum = firstTotal + secondTotal;
        return totalNum;
    }
    else {
        const firstTotal = 10 * first;
        const secondTotal = 10 * second;
        const restNum = num - 20;
        const restTotal = restNum * rest;
        const totalNum = firstTotal + secondTotal + restTotal;
        return totalNum;
    }
}

const number = add(20);
console.log(number);
