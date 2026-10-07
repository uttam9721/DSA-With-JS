// const numbers = [10,20,30,40,50];

// const sum =numbers.reduce((acc,curr)=>acc+curr,0);
// console.log(sum)

let arr = [9,2,6,4,1,10];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);
