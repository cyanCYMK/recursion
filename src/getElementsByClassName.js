// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var body = document.body;
  var accumulator = (typeof accumulator === 'undefined') ? [] : accumulator;
  
  loopThruElement(body, accumulator);
  return accumulator;

  function loopThruElement(element, accumulator){
    accumulator = doesElementHaveClass(element, accumulator);
    var children = element.childNodes;
    for (var j=0, length=children.length; j<length; j++){
      loopThruElement(children[j], accumulator);
    }
  }

  function doesElementHaveClass(element, accumulator){
    var classes = element.classList;
    if (typeof classes !== 'undefined'){
      for (var i=0, l=classes.length; i<l; i++){
        if (classes[i] === className) {
          accumulator.push(element);
        }
      }
    }
    return accumulator;
  }
};
