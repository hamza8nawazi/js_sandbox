let x;

const arr = [ 12,34,56,78,90 ];

arr.push(100) //to add a number to very end

arr.pop()  // to take out the last element from the list

arr.unshift(99) //to add element into the beginning

arr.shift()//to exclude element into the beginning

//arr.reverse()

x=arr.includes(12) // true false output if the number is in the list

x=arr.indexOf(12)

//x=arr.slice(1, 4) // to seperate an element


//x=arr.splice(1, 4) //to remove an element

x=arr.splice(1, 4).reverse().toString().charAt(3);



console.log(x)