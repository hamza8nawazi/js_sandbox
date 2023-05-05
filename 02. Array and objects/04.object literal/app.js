let x;


const person= {
    name: 'john doe',
    age: 30,
    isAdmin: true,
    address : {
        street: '123 main st',
        city: 'Bostan',
        state: 'MA'
    },
    hobbies: ['musics', 'football', 'studying']
}

x=person.name;
x=person['age']
x=person.address.state;
x=person.hobbies;

person.name= 'jane doe'
person['isAdmin']=false

delete person.age; //to delete

person.haschildren = true;
person.greet = function() {
    console.log(`hello , my name is ${this.name}`)
}

person.greet();

const person2 = {
    'first name': 'brad',
    'last name' : 'traversy',

}

x=person2['first name']


console.log(x);