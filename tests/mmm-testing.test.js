const expect = require("chai").expect;

describe("Functions into mmm-testing.js", function () {
	// Fake for use by newsletter.js
	Module = {};
	Module.definitions = {};
	Module.register = function (name, moduleDefinition) {
		Module.definitions[name] = moduleDefinition;
	};

	before(function () {
		require("../mmm-testing.js");
		Module.definitions["mmm-testing"].config = {};
	});

	describe("roundValue", function () {
		describe("this.roundValue is 1", function () {
			expect(Module.definitions["mmm-testing"].roundValue(4)).to.equal(value[1]);
		});
	});
});
