// // Challenge 2

// **Instructions:**

// Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
  return {
  min,
  max,
  };
  }
  
  console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));
  //
//   Challenge 2

//   **Instructions:**
  
//   Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
  const getCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  };
  
  console.log(`The temperature is ${getCelsius(102)} \xB0C`);


//   Challenge 3

// Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

((length, width) => {
    const area = length * width;
    
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
    console.log(output);
    })(10, 5);