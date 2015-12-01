function range(start,end, step){
  var sentinel = [];
  //var step = step;
  if (step > 1){
    for (var i = start; i <= end; i++){
      sentinel.push(i + step);
    }
  }else if (step < 0){
    for (var i = start; i >= end; i += step){
      sentinel.push(i);
    }
  } else{
    for (var i = start; i <= end; i++){
      sentinel.push(i);
    }
  }
  
  
  return sentinel;
}



function sum(range){
  counter = 0;
  for (var i = 0; i <= range.length; i++){
      counter += i
  }
  return counter;
}

console.log(sum(range(1,16)));
console.log(range(2,20,1));