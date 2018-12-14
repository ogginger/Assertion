//Assertion.js: Functional Logic.

define([
	"underscore",
	"bIsObjectEqual"
], function(
	_,
	bIsObjectEqual
) {
  return function( Input ) {
	//Check if the comparator passes the comparison clause.
	if ( _.has( Input, "ComparisonFunction" ) ) {
		//Atypically the comparison clause will be given.
		return Input.ComparisonFunction( Input );
	} else if ( 
		_.has( Input, "Comparator" ) &&
		_.has( Input.Comparator, "Object" ) &&
		Input.Comparator.Object === true
	) {
		//Objects need a special function to compare for equivalence.
		return bIsObjectEqual({
			"Comparator": Input.Result,
			"Comparand": Input.ExpectedResult
		});
	} else if ( Input.ExceptionTest ) {
		//Exceptions need to be compared as objects.
		return bIsObjectEqual({
			"Comparator": Input.Result,
			"Comparand": Input.ExpectedOutput 
		});
	} else {
		//Typically the comparison clause is of equivalence.
		return Input.Result === Input.ExpectedOutput;
	}
  };
});
