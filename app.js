function repeatStringNumTimes(str, num) {
    var repeat = " ";
    for (i=1; i<=num; i++){
        repeat = repeat + str;
    }
    return repeat;
    
  }
  
 console.log(repeatStringNumTimes("abc", 3));
 console.log(repeatStringNumTimes('hello', 12));

function truncateStr(str, num){
    if (str.length > num){
        return str.slice(0,num) + "...";
    } else { return str;}
}
  
  console.log(truncateStr('Hello there', 5));

  function findElement(arr, func) {
    return arr.find(func);
  }

  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));