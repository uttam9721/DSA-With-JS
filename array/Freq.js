let arr=[1,2,3,4,5,5,1,2,3,4,5];
let freq={};
arr.forEach((item)=>{
    freq[item]=(freq[item]||0)+1;
})
console.log(freq);