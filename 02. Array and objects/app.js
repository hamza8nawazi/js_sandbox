let x;

//Array literal
const numbers = [12,33,45,99,10]


//array constructor

const fruits= new Array('apple', 'grape', 'orange');

x = numbers[0]

x= numbers[0] + numbers[4];

x= `my favourite fruit is an ${fruits[2]}`

x = numbers.length  //to find the lenght

fruits[2]='pear' ;
x= fruits

fruits[3]= 'strawberry'
fruits[fruits.length]= 'blueberry'
fruits[fruits.length]= 'mango'

x=fruits

console.log(x)