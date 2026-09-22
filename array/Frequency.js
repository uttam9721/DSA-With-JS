let arr = [1, 2, 2, 3, 1, 1, 4];
let freq={};
for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]++;
    }else{
        freq[arr[i]]=1;
    }
    
}
console.log(freq);