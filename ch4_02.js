function reverseArray(arr){
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    //inserts each value to the beginning of newArray
    newArray.unshift(arr[i]);
  }
  return newArray;
}

console.log(reverseArray([2,3,4,5,6]));
var arr = [1,2,3,4,5,6];
function reverseArrayInPlace(value){
  for (var i = 0; i < Math.floor(value.length/2); i++){
    //holds the mid value of the array  
    var old = value[i];
    value[i] = value[value.length - 1 - i];
    value[value.length - 1 - i] = old;
  }
  return {value, old};
}
console.log(reverseArrayInPlace(arr));