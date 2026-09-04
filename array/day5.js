// let arr = [10,20,30,40,50];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log("Sum of array elements is: " + sum);


let arr=[51,42,89,6,5,2,1];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }

}
console.log("Maximum element in the array is: " + max);