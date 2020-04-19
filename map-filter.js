const numbers = [3, 4, 6, 7, 8];
// const output = [];
// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square(element){
//     return element * element;
// }

// const result = numbers.map(function square(element){
//    return element * element;
// })
// console.log(result);

// const result = numbers.map(x => x * x);
// console.log(result);

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// const result = numbers.filter(x => x > 5);

const result = numbers.find(x => x > 5);
console.log(result);

