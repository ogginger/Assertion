//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"validate": "lib/validate.min"
    },
    exclude: [
	"underscore",
	"validate"
    ],
    name: "Assertion",
    out: "assertion.min.js"
})
