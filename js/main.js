// add scripts

console.log("sanity check!");

var missingNumber = function(arr, max){
  console.log("hello");
  var maxSum =0 ;
  var sum = max;
  for (var i = 0; i < max; i++) {
    maxSum += sum--;
  }
  arrSum = arr.reduce(
    function(total, num){
      return total + num;
    });
    console.log(maxSum - arrSum);
  };
  var test = [1,2,3,4,6,7,8,9,10,11,12,13,15,14,5];
  missingNumber(test, 15);
