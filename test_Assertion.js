//test_Assertion.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "Assertion",
  "tests/Assertion_PassingAssertion_ReturnsTrue",
  "tests/Assertion_PassingCustomComparison_ReturnsTrue",
  "tests/Assertion_EquivalentObjects_ReturnsTrue"
], function(
  TestSuite,
  log,
  Assertion,
  Assertion_PassingAssertion_ReturnsTrue,
  Assertion_PassingCustomComparison_ReturnsTrue,
  Assertion_EquivalentObjects_ReturnsTrue
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_Assertion initialized successfully!");
      var xTestSuite = this;
        xTestSuite.set( "MethodUnderTest", "Assertion" );  

	xTestSuite.add( Assertion_PassingAssertion_ReturnsTrue );
  	xTestSuite.add( Assertion_PassingCustomComparison_ReturnsTrue );
	xTestSuite.add( Assertion_EquivalentObjects_ReturnsTrue );

      xTestSuite.test();
    }
  });
});
