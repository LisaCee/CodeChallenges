const array1 = [14, 1, 18, 23, 12, 8, 16];
const array2 = [14, 1, 18, 23, 12, 16];

const greatestLoss = (stockArray) =>{
  let difference = 0;
  
  for (let i = 0; i < stockArray.length; i++) {
    console.log(stockArray[i])
    for (let j = i+1; j < stockArray.length-1; j++) {
       console.log(stockArray[j])
      let thisDifference = stockArray[j] - stockArray[i];
      if (thisDifference < difference) {
        difference = thisDifference;
      } 
    }
  }
  return difference;
}

greatestLoss(array1);
// greatestLoss(array2);