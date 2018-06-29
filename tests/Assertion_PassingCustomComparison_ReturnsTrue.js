//Assertion_PassingCustomComparison.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Assertion_PassingCustomComparison",
		"Input": {
			"Result": true,
			"ExpectedOutput": false,
			"ComparisonFunction": function( Input ) {
				return Input.Result !== Input.ExpectedOutput;
			}
		},
		"Function": Assertion,
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
	};
});
