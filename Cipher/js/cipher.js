var userEntry = prompt("Enter a sentance of your choice here");
var splitArr = userEntry.split('');
var firstLetter = splitArr[0].toUpperCase();
var lastLetter = splitArr[splitArr.length-1].toUpperCase();
splitArr[0] = firstLetter;
splitArr[splitArr.length-1] = lastLetter;
console.log(splitArr);
console.log(splitArr.join(''));
