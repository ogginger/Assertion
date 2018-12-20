//Assertion_EquivalentObjects_ReturnsTrue.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Assertion_EquivalentObjects_ReturnsTrue",
		"Input": {
			"Result": { "Property": "Value" },
			"ExpectedOutput": { "Property": "Value" }
		},
		"Function": Assertion,
		"ExpectedOutput": true
	};
});
