//Asseretion_NoResult_ThrowsErrorNoResult.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Asseretion_NoResult_ThrowsErrorNoResult",
		"Input": undefined,
		"Function": Assertion,
		"ExpectedOutput": { "Message": "Error: No result given!" },
		"ExceptionTest": true,
		"Comparator": {
			"Object": true
		},
		"Debug": true
	};
});
