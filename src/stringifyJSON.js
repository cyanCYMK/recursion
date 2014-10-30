// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var quote = '"';
 
  if (typeof obj === 'undefined') {
  	return obj;
  } else if (!obj && obj !== 0) {
  	return obj + '';
  } else if (typeof obj === 'string') {
  	return quote + obj + quote;
  } else if (Array.isArray(obj)) {
  	var res = (typeof res === 'undefined') ? [] : res;
  	return stringifyArray(obj, res);
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
  		if (typeof value === 'string') {
  			result.unshift(quote+value+quote);
  			stringifyArray(copy, result);
  		} else if (Array.isArray(value)) {
  			var subResult = (typeof subResult === 'undefined') ? [] : subResult;
  			result.unshift(stringifyArray(value, subResult));
  		} else {
  			result.unshift(value);
  			stringifyArray(copy, result);
  		}
  	}
  }
};
