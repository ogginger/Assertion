//Assertion.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	if ( _.has( Input, "ComparisonFunction" ) ) {
		return Input.ComparisonFunction( Input );
	} else {
		return Input.Result === Input.ExpectedOutput;
	}
  };
});
