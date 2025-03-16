// function filterEvenNumbers(arr) {
//     return new Promise((resolve, reject) => {
//       let evenNumbers = [];
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//           evenNumbers.push(arr[i]);
//         }
//       }
//       if (evenNumbers.length > 0) {
//         resolve(evenNumbers);
//       } else {
//         reject("No even numbers found");
//       }
//     });
//   }
  
//   // User Input
  
//   if (userInput) {
//     const arr = userInput.split(',').map(Number);
  
//     // Sample Usage
//     filterEvenNumbers(arr)
//       .then(result => console.log(result)) // Even numbers array
//       .catch(error => console.log("Error:", error)); // Error message
//   } else {
//     console.log("No input provided.");
//   }
  