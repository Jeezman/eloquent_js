//bean counting
function countBs(str){
  /**count = 0;
  for(i = 0; i < str.length; i++){
    if (str.charAt(i) == 'B'){
      count += 1;
    }
  }
  return count;**/
  return countChar(str,'B');
}
countBs('AbbBaaBAdfdBBBBB');

function countChar(str, char){
  count = 0;
  for (i = 0; i < str.length; i++){
    if(str.charAt(i) == char){
      count += 1;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));