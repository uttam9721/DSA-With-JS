// function List({ items }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>
//           <input type="text" defaultValue={item.name} />
//         </li>
//       ))}
//     </ul>
//   );
// }
// let num=Number(prompt("Enter the number of elements in the array"));

// WAP to find the sum of first 100 natural numbers.
 
// let num =100;
// let sum = 0;
// for(let i=1;i<=num;i++){
//     sum=sum+i;
// }
// console.log("Sum of first " + num + " natural numbers is: " + sum);


// WAP to find factorial of a number.
// let num=5;
let num=10;
let factorial=1;
for(let i=1;i<=num;i++){
    factorial=factorial*i;
}
console.log("Factorial of " + num + " is: " + factorial);
