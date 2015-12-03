//recursion
function isEven(input){
	if (input == 0) return true;
	else if (input == 1) return false;
	else if (input < 0) return isEven(-input);
	else return isEven(input - 2);

}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-10));