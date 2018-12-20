//Asseretion_NoExpectedOutput_ThrowsErrorNoExpectedOutput.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Asseretion_NoExpectedOutput_ThrowsErrorNoExpectedOutput",
		"Input": {
			"Result": undefined
		},
		"Function": Assertion,
		"ExpectedOutput": { "Message": "Error: No ExpectedOutput was given!" },
		"ExceptionTest": true,
		"Debug": false
	};
});
