// solutions here
var async = require('async');
var lib = require('./lib/lib.js');


function doAsync (arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		element = arr[i];
		if (typeof element === 'object'){
			async.parallel({
			    one: function(callback, results){
			        doAsync(element);
			        //console.log(element);
			    },
			});
		}else{
			lib.asyncOp(element);
		}
	};
}

let input = [
  'A',
  [ 'B', 'C' ],
  'D'
]

doAsync(input);