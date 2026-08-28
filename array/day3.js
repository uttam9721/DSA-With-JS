let arr=[5,2,7,9,5,4,1];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max);