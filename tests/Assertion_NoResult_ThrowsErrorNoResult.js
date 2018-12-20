//Asseretion_NoResult_ThrowsErrorNoResult.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Asseretion_NoResult_ThrowsErrorNoResult",
		"Input": {
			"ExpectedOutput": undefined
		},
		"Function": Assertion,
		"ExceptionTest": true,
		"ExpectedOutput": { "Message": "Error: No Result was given!" },
		"Debug": false
	};
});
