// let num = 121;
// let original = num;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;

//     reverse = reverse * 10 + digit;

//     num = Math.floor(num / 10);
// }

// if (original === reverse) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }


let arr = [1, 2, 3, 4, 5,0, 4, 3, 2, 1];
let max=-Infinity;
let smax=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        smax=max;
        max=arr[i];
    }else if(arr[i]>smax && arr[i]!=max){
        smax=arr[i];
    }

}
console.log("Second largest number is: "+smax);