let largestOfFour = (arr) => {
  // You can do this!
  const resultArray = []
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i].reduce((acc, count) => acc > count ? acc : count)  
    resultArray.push(largest)
  }
  console.log(resultArray)
  return resultArray
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
