let x ;

const todo= {};

todo.id= 1;
todo.name = 'buy milk'
todo.completed= false;
x=todo;

const person={ 
    address : {
        coords: {
            lat: 42.9402,
            lng: -71.9083,
        }
    }
}

x=person.address.coords.lat;

const obj1 = {a:1 , b:2}
const obj2 = {c:3 , d:4}

const obj3 = {...obj1 , ...obj2}
const obj4 = Object.assign({}, obj1,obj2) //same property as spread opertor

const todos= [
    {id1: 1 , name : 'buy milk'},
    {id1: 2 , name : 'making tea'},
    {id1: 3 , name : 'take out trash'},

];


x= todos[0].name;

x=Object.keys(todo),
x= Object.keys(todo).length;

x=Object.values(todo);

x=Object.entries(todo);

x=todo.hasOwnProperty('age'); //true false result , shows if the property is in it or not


console.log(x)
