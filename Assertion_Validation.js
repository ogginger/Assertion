//Assertion_Validation.js: Functional Logic.

define([ "underscore" ], function( _ ) {
  return [
	function( Input ) {
		if ( _.has( Input, "Result" ) === false ) {
			throw { "Message": "Error: No Result was given!" };
		} else if ( _.has( Inupt, "ExpectedOutput" ) === false ) {
			throw { "Message": "Error: No ExpectedOutput was given!" };
		} else {
			return true;
		}
	}
  ];
});
