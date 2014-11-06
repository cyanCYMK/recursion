// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var body = document.body;
  var accumulator = (typeof accumulator === 'undefined') ? [] : accumulator;
/*  var bodyClasses = body.classList || [];
  var bodyIndex = bodyClasses.indexOf(className);
  if (bodyClasses.indexOf(className) > -1) {
  	
  }
*/
  return getChildNodes(body, accumulator);

  // input element and looks through children until there are no more
  function getChildNodes(element, accumulator){
  	var elClasses = element.classList;
  	var elChildren = Array.prototype.slice.apply(element.childNodes);
    if (typeof elClasses !== 'undefined') {
    	// loop through elClasses and look if it contains className
    	// if it contains then push it
    	elClasses = Array.prototype.slice.apply(elClasses);
    	elClasses.forEach(function(val) {
          if (val === className) {
          	accumulator.push(element);
          }
    	});
    	return accumulator;
    }
/*  	if (typeof elClasses !== 'undefined' && elClasses.contains(className)) {
      accumulator.push(element);
  	}*/
  	// if children has more children in it, do until childNodes is []
  	/*if (elChildren.length === 0) {
  		return accumulator;
  	}
    for (var i=0, l=elChildren.length; i<l; i++) {
      var childClasses = elChildren[i].classList;
  	  if (typeof childClasses === 'undefined' || childClasses.length === 0) {
  	    continue;
  	  }
  	  else if (childClasses.contains(className)) {
  	   	accumulator.push(elChildren[i]);
  	  }
    }*/
  }

};
