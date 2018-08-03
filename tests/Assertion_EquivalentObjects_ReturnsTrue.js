//Assertion_EquivalentObjects_ReturnsTrue.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Assertion_EquivalentObjects_ReturnsTrue",
		"Input": {
			"Comparator": { "Property": "Value" },
			"Comparand": { "PropertyValue": "Value" }
		},
		"Function": Assertion,
		"ExpectedOutput": true
	};
});
