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
  var new_arr = [elem, ...arr]
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

function removeElementFromBeginningOfArray(arr){
  var new_arr = arr.slice(0)
  return new_arr
}