/* function largest(num) {

}
var student = { name: "Yo Mama", age: 17 };
var i = delete student.age;
console.log(student)


 */


// ----------------------------------------------------------------
/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */

var i = 7;
while (i <= 19) {
    if (i % 2 != 0) {
        // console.log(i);
    }
    i++;
}

// ---------------------------------------------------------
// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

/* const arr = [11, 25, 26, 45, 78, 7];
var arrLength = arr.length;
arr[3] = 99;
arr.push(3);
arr.unshift(6);
arr.pop();
arr.shift();
var tr = arr.indexOf(12);
var tr1 = arr[5]; // -1
console.log(tr1);

console.log(arr, arrLength);
 */

// -------------------------------------------------------------------

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

var arr = [4, 8, 7, 96, 78, 5, 5, 5, 45, 6, 5];
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
    // const newArr = arr[i];               //not needed
    console.log(arr[i]);
}


//-------------------------------------------------------
// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

/* 
function largestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const rahat = numbers[i];
        if (rahat > 80) {
            largest = rahat;
            console.log(rahat)
        }
    }
    // return largest;              //not needed
}
var urmi = [56, 87, 89, 52, 2, 5, 23, 6, 54, 95, 1];
const love = largestNumber(urmi);
// console.log(love);

 */



// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
/* 

function multiplay(num1, num2, num3) {
    const result = num1 * num2 * num3;
    return result;
}
const finalNumber = multiplay(15, 85, 8);
console.log(finalNumber);

 */



// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

/* let sumaiya = { color: 'red', age: 20, home: "barishal" };
sumaiya.home = 'dhaka';
console.log(sumaiya);  */

//১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
/* 
function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}
const feetIs = 5;
const inch = feetToInch(feetIs);
console.log(inch, 'inch');

 */



//2. কদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন কর

/* function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}
const centimeterIs = 500;
const meter = centimeterToMeter(centimeterIs);
console.log(meter, 'meter');
 */




// -----------------------------------------------------------

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।
// এইবার ভালো করে খেয়াল করো।
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে।
// আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।



/* 
function paperRequirements(firstBook, secondBook, thirdBook) {
    const firstParBookPaper = 100;
    const secondParBookPaper = 200;
    const thirdParBookPaper = 300;

    // Paper par book

    const firstBookPaper = firstBook * firstParBookPaper;
    const secondBookPaper = secondBook * secondParBookPaper;
    const thirdBookPaper = thirdBook * thirdParBookPaper;

    const totalPaper = firstBookPaper + secondBookPaper + thirdBookPaper;

    return totalPaper;
}

const totalBookPaper = paperRequirements(1, 5, 10);
console.log(totalBookPaper); */




// -----------------------------------------------

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

/* function positiveNumber(numbers) {
    let positiveArray = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveArray.push(number);
        }
        else {
            return positiveArray;
        }
    }
    return positiveArray;
}
const numbersArray = [51, 89, 69, 15, -4, 84, 2];
const positiveNumberIs = positiveNumber(numbersArray);
console.log(positiveNumberIs); */








// -----------------------------------------

/* 
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */


function bestFriend(name) {
    let largeFriendName = name[0];

    for (var i = 0; i < name.length; i++) {
        var largest = name[i];                  //
        // console.log(i, largest);

        if (largeFriendName.length < largest.length) { // chack by defult data
            largeFriendName = largest;
            // console.log('ok');
        }

    }
    return largeFriendName;

}

const bestFriendName = ['rahat', 'fardush', 'munna', 'rakib', 'shakil', 'rana',];
const friendLargeName = bestFriend(bestFriendName);

console.log(friendLargeName);



