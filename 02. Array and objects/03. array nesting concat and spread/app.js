let x;

const fruits =['apple', 'pear', 'orange'];
const berries = [' rasberry','blueberry','strawberry']

//fruits.push(berries);

//x=fruits[3][1];

const allfruits=[fruits , berries]

x= allfruits[1][0] ;

x= fruits.concat(berries) // add array in another array

//spread operator (...)
 
x=[... fruits, ... berries] // spreading one array into another

//flatten arrays

const arr = [1,2,[3,4],5,[6,7],8]
x= arr.flat(); // to remove nested array and make it one whole array

//static method on array object

x= Array.isArray('helllo') //checks whether its in array or not , true false

x= Array.from('12345')

const a= 1
const b= 2
const c= 3

x= Array.of(a,b,c)



console.log(x)