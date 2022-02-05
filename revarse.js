const graeetins = 'hellow how are you?';

function reverceString(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}
const reverced = reverceString(graeetins);
console.log(reverced);



function reversedStrin(text) {
    let revers = '';
    for (const reversed of text) {              //var reversed = text [i]
        revers = reversed + revers;
    }
    return revers;
}
var re = 'i am lazy';
const ve = reversedStrin(re);
console.log(ve);