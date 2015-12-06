function arrayToList(arr){
	var list = null;
	for(var i = arr.length - 1; i >= 0; --i){
		list = { value: arr[i], rest: list}
	}
	return list;
}

function listToArray(list){
	var arr = [];
	for(var node = list; node; node = node.rest){
		arr.push(node.value);
	}
	return arr;
}

function prepend(value,list){
	return {value: value, rest: list}
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

var nums = [1,2,3];
console.log(nth(arrayToList(nums),2));