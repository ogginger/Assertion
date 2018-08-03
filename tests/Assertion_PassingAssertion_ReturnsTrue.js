//Assertion_PassingAssertion_ReturnsTrue.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Assertion_PassingAssertion_ReturnsTrue",
		"Input": {
			"Comparator": true,
			"Comparand": true
		},
		"Function": Assertion,
		"ExpectedOutput": true
	};
});
