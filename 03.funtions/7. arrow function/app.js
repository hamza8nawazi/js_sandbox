// function add(a, b) {
//     return a + b ;
// }


//Arrow function syntax
const add= (a, b) => {
    return a + b;
}
 //implicit return
const subtract = (a, b ) => a-b

//can leave off () with a single parameters
const double = a => a * 2;

//returning an object

const createobj = () => ({
    name: 'brad'
});

const numbers=[1,2,3,4,5];
numbers.forEach(function(n) {
    console.log(n);

})

//array function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1,2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createobj());