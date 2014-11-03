// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var body = document.body;
  var accumulator = (typeof accumulator === 'undefined') ? [] : accumulator;

  // input element and looks through children until there are no more
  function getChildNodes(element, accumulator){
  	elChildren = element.childNodes
  	// if children has more children in it, do until childNodes is []
  	if (elChildren.length === 0) {
  		return accumulator;
  	}
    for (var i=0, l=elChildren.length; i<l; i++) {
  	   if (elChildren[i].classList.contains(className)) {
  	   	accumulator.push(elChildren[i]);
  	   }
    }

  } 

};
