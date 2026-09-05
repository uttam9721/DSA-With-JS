const arr=[5,8,9,4,1,8,6,1,88];
let max=-Infinity;
let smax=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        smax=max;
        max=arr[i];
    }
    else if(arr[i]>smax){
        smax=arr[i];
    }
}
console.log(smax);