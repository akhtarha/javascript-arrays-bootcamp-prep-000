var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem){
  new_arr = [elem, ...arr]
  return new_arr
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem)
  return arr
}

function addELementToEndOfArray(arr, elem){
  new_arr = [elem, ...arr]
  return new_arr
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem)
  return arr
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}