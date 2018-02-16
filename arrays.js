var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(){
  var newChocolate = ["foo", ...chocolateBars]
  return newChocolate
  
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateBar){
  chocolateBars.push(chocolateBars, "butterfinger")
  return chocolateBars
}