const age = 19

// usin if statement

if(age >= 18){
    console.log('you can vote')
} else{
    console.log('you can not vote')
}

//using ternary operator

age >= 18 ? console.log('you can vote') : console.log('you can not vote') // if ( ? ) and else( : )

//asigning a conditional value to a variable

const canvote = age >= 18 ? true : false ;
console.log(canvote)