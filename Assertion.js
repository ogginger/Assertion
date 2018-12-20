//Assertion.js: Functional Logic.

define([
	"underscore",
	"validate",
	"Assertion_Validation"
], function(
	_,
	validate,
	Assertion_Validation
) {
  return function( Input ) {
	validate({
		"Validation": Assertion_Validation,
		"Data": Input
	});

	//Check if the comparator passes the comparison clause.
	if ( _.has( Input, "ComparisonFunction" ) ) {
		//Atypically the comparison clause will be given.
		return Input.ComparisonFunction( Input );
	} else {
		//Typically the comparison clause is of equivalence.
		return JSON.stringify( Input.Result ) === JSON.stringify( Input.ExpectedOutput );
	}
  };
});
