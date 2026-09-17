let arr = [1, 2, 3, 4, 2, 5, 3, 6, 4, 7];

let duplicate = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
}

console.log(duplicate);