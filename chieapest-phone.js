// array of Object

const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, stroge: 32 },
    { name: 'walton m32', price: 15000, camera: 8, stroage: 8 },
    { name: 'shaomi m3', price: 12000, camera: 8, stroage: 16 },
    { name: 'oppo a2', price: 17000, camera: 8, stroage: 32 },
    { name: 'nokia n95', price: 8000, camera: 8, stroage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, stroage: 16 }
];


//using condition

/* 
let cheaptest = phones[0];
for (const phone of phones) {
    // compare price only 
    if (phone.price > cheaptest.price) {
        cheaptest = phone;
    }

}
console.log(cheaptest);

 */


//using function

function cheaptest(phones) {
    let cheaptestIs = phones[0];
    for (const phone of phones) {
        if (phone.price < cheaptestIs.price) {
            cheaptestIs = phone;
        }
    }
    return cheaptestIs;
}
var lowest = cheaptest(phones);
console.log(lowest);