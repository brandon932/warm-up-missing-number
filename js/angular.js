// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.greeting = "Hello World!";
  // $scope.missingNumber = function(arr){
  //   sorted = bubbleSort(arr);
  //
  //   for (var i = 0; i < sorted.length; i++) {
  //     if(sorted[i] != (i=1)){
  //       console.log(i+1);
  //       return i+1;
  //     }
  //   }
  // };
  // $scope.test = [1,2,3,4,6,7,8,9,10];

});

// function bubbleSort(a)
// {
//   var swapped;
//   do {
//     swapped = false;
//     for (var i=0; i < a.length-1; i++) {
//       if (a[i] > a[i+1]) {
//         var temp = a[i];
//         a[i] = a[i+1];
//         a[i+1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
