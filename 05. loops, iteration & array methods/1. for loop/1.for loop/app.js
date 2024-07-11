//for([initialexpression];[conditionalexpression];[incrementexpression]){}






// for(let i=0;i<=10;i++){
//     if(i===7){
//         console.log('7 is my lucky number')
//         } else{
//             console.log('number'+i)

//         }
    
// }

//nest loops
//  for(let i=1;i<=10;i++){
//     console.log('number'+ i);

//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//  }

// loop through an array

const names=['brad','sam','sara','john','tim']

for(let i=0;i<names.length;i++){
    
    if(i===2){
        console.log('sara is the best')
     } else{
            console.log(names[i])
        
     }
}

console.log(new Number)