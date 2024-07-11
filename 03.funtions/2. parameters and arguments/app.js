//default parameters
function registeruser(user = 'bot') {
    // if(!user){
    //     user = 'bot'


    // }


    return user + ' is registered';
}

console.log(registeruser());


//rest parameters

function sum(...numbers){
    let total = 0 

    for(const num of numbers){
        total += num;
    }
return total ;
}
console.log(sum(1,2,3,4,5));

//objects as parameters

function loginuser (user) {

    return `the user ${user.name} with the id of ${user.id} is logged in` ;

}

const user={
    id:1,
    name: 'john',
}

console.log(loginuser(user));
console.log(
    loginuser({
    id:2,
    name: 'sara',
})
);

//array parametef
function getrandom (...arr) {
    const randomindex = Math.floor(Math.random() * arr.length);

    const item = arr[randomindex]


    console.log(item);

}

getrandom([1,2,3,4,5,6,7,8,9])



