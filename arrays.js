var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addBeginningConserve = [1];

function addElementToBeginningOfArray(addBeginningConserve, element){
  return ["foo",...addBeginningConserve]
}

var addBeginningDestruct = [1];
function destructivelyAddElementToBeginningOfArray(addBeginningDestruct, element){
  return addBeginningDestruct.unshift("foo");
}

var addEndConserve = [1];
function addElementToEndOfArray(addEndConserve, element){
  return [...addEndConserve,"foo"]
}

var addEndDestruct = [1];
function destructivelyAddElementToEndOfArray(addEndDestruct, index){
  return addEndDestruct.push("foo");
}

var array = [1,2,3];
function accessElementInArray(array,index){
  return array[2];
}

var removeBeginningDestruct = [1,2,3];
function destructivelyRemoveElementFromBeginningOfArray(removeBeginningDestruct){
  removeBeginningDestruct.shift();
  return removeBeginningDestruct
}
