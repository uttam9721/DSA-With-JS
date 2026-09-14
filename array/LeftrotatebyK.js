// let arr=[1,2,3,4,5];
// let k=2;
// for(let j=0;j<k;j++){
// let copy=arr[0];
// for(let i=0;i<k;i++){
//     arr=[i]=arr[i+1];

// }
// arr[arr.length-1]=copy;
// }
// console.log(arr)


let arr=[1,2,3,4,5];
let i=0;
let j=arr.length-1;
while(i!=j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr)