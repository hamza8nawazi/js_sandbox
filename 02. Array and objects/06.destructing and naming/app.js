 const firstname = ' john ';
 const lastname = 'doe';
 const age= 30;

 const person={
    firstname: firstname,
    lastname: lastname,
    age: age,

 }

 console.log(person.age)

 //destructuring

 const todo={
    id:1,
    title:'take out the trash',
    user:  { 
        name: 'john'
     }
 }
 
 const { id, title,user:{name},} = todo;




 console.log(name)

 //destruct arrays

 const numbers=[23,67,33,49]
 const [first , second,...rest]= numbers; //rest operator(...) use same as spread operator


 console.log(first,second,rest);