var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem){
  new_arr = [elem, ...arr]
  return new_arr
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.push(elem)
  return arr
}

