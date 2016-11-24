var app = {
findMinMax: function(numbers){
  largest = numbers[0];
  smallest = numbers[0];
for(i = 0; i<= numbers.length-1; i++){
  if (largest < numbers[i]){
    largest = numbers[i];
  }

// return large;
}
for(i = 0; i<= numbers.length-1; i++){
  if(smallest > numbers[i]){
    smallest = numbers[i];
  }
//  return smallest;

}
if(smallest == largest){
  return [smallest];
}

return [smallest, largest];
}

}
module.exports = app
