//Assertion_ExceptionTestTrue_ReturnsTrue.js: Testing logic.

define([
	"Assertion"
], function(
	Assertion
) {
	return {
		"Name":"Assertion_ExceptionTestTrue_ReturnsTrue",
		"Input": {
			"ExceptionTest": true,
			"Result": { "Message": "Error" },
			"ExpectedOutput": { "Message": "Error" }
		},
		"Function": Assertion,
		"ExpectedOutput": true,
		"Debug": false
	};
});
