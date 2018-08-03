//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"bIsObjectEqual": "lib/bIsObjectEqual"
    },
    exclude: [
	"underscore"
    ],
    name: "Assertion",
    out: "assertion.min.js"
})
