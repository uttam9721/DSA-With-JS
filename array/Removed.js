let arr = [1, 2, 2, 3, 1, 4, 3];
let dup=[];
for(let i=0;i<arr.length;i++){
    if(!dup.includes(arr[i])){
        dup.push(arr[i]);
    }
}
console.log(dup);