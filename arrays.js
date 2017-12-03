var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addBeginningConserve = [1,2,3];

function addElementToBeginningOfArray(addBeginningConserve, element){
  return ["foo",...addBeginningConserve]
}

var addBeginningDestruct = [1,2,3];
function destructivelyAddElementToBeginningOfArray(addBeginningDestruct, element){
  return beginningDestruct.unshift("foo")
}

var addEndConserve = [1,2,3];
function addElementToEndOfArray(addEndConserve, element){
  return [...addEndConserve,"foo"]
}

var addEndDestruct = [1,2,3];
function destructivelyAddElementToEndOfArray(addEndDestruct, index){
  return addEndDestruct.push();
}
