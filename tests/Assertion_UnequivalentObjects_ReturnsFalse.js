//Asseretion_UnequivalentObjects_ReturnsFalse.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Asseretion_UnequivalentObjects_ReturnsFalse",
		"Input": {
			"Result": { "Property": true },
			"ExpectedOutput": { "Property": false }
		},
		"Function": Assertion,
		"ExpectedOutput": false,
		"Debug": false
	};
});
