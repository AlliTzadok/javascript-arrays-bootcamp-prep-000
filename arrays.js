var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addBeginningConserve = [1,2,3];

function addElementToBeginningOfArray(addBeginningConserve, element){
  return ["foo",...addBeginningConserve]
}

var addBeginningDestruct = [1,2,3];
function destructivelyAddElementToBeginningOfArray(addBeginningDestruct, element){
  return beginningDestruct.unshift("foo")
}

var endConserve = [1,2,3];
function addElementToEndOfArray(endConserve, foo){
  return [...endConserve,"foo"]
}

var endDestruct = [1,2,3];
function destructivelyAddElementToEndOfArray(endDestruct, index){
  return accessElementInArray[2]
}
