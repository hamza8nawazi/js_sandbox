// AND (&&) operator
console.log(10 < 20 && 30 > 15  )  // '&&' everything should be true

// OR operator ( || )
console.log(10 < 20 || 30 > 15  ) //one of them has to be true

// && - will return first falsy value or the last value

let a;
a= 10 && 20;
a= 10 && 20 && 30;
a= 10 && 20 && 30 && 40;

console.log(a)


// ||- will return first truthy value or the last value
let b;
b= 10 || 20;
b= 10 || 20;

console.log(b)

// ?? - returns the right side operand when the left is null or undefined
 let c;

 c = 10 ?? 20;
 c = null ?? 20;
 c = 0 ?? 30;

 console.log(c)