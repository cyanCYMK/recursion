// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var quote = '"';
 
  if (typeof obj === 'undefined' || typeof obj === 'function') {
  	return undefined;
  } else if (!obj && obj !== 0) {
  	return obj + '';
  } else if (typeof obj === 'string') {
  	return quote + obj + quote;
  } else if (Array.isArray(obj)) {
  	var resArr = (typeof resArr === 'undefined') ? [] : resArr;
  	return stringifyArray(obj, resArr);
  } else {
  	return obj.toString();
  }
  // recursive function to stringify an array
  function stringifyArray(arr, result) {
  	var copy = (typeof copy === 'undefined') ? arr.slice() : copy;
  	var index = copy.length - 1;
  	if (index < 0) {
  		return '[' + result.join(',') + ']';
  	} else {
  		var value = copy.pop();
  	}
  	result.unshift(stringifyJSON(value));
  	return stringifyArray(copy, result);
  }
};
