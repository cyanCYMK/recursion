// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var quote = '"';
  if (typeof obj === undefined) {
  	return obj;
  } else if (!obj && obj !== 0) {
  	return obj + '';
  } else if (typeof obj === 'string') {
  	return quote + obj + quote;
  } else {
  	return obj.toString();
  }
};
