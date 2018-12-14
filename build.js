//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"bIsObjectEqual": "lib/is_object_equal.min"
    },
    exclude: [
	"underscore",
	"bIsObjectEqual"
    ],
    name: "Assertion",
    out: "assertion.min.js"
})
