var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(){
  ["twix", ...chocolateBars]
  
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateBar){
  chocolateBars.push(chocolateBars, "butterfinger")
  return chocolateBars
}