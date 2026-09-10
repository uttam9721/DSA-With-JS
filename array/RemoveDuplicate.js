let arr=[1,2,3,4,5,5,1,2,3,4,5];
let dup=[];
for(let i=0;i<arr.length;i++){
    if(!dup.includes(arr[i])){
        dup.push(arr[i]);
    }
}
console.log(dup);