const names = ['avul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);

    //     // if (unique.indexOf(element) == -1) {    
    //     //     unique.push(element);
    //     // }

    // }


    for (const element of names) {                          //for array
        console.log(element);
        if (unique.indexOf(element) == -1) {                //unique funcion
            unique.push(element);                           //unique funcion
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);