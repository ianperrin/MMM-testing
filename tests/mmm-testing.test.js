const expect = require("chai").expect;

describe("Functions into mmm-testing.js", function () {
	// Fake for use by newsletter.js
	Module = {};
	Module.definitions = {};
	Module.register = function (name, moduleDefinition) {
		console.log(name);
		Module.definitions[name] = moduleDefinition;
		console.log(Module.definitions);
	};

	before(function () {
		// load newsfeed.js
		require("../mmm-testing.js");
		Module.definitions["mmm-testing"].config = {};
		console.log(Module.definitions);
	});

	describe("returnValue", function () {
		describe("this.config.returnValue is 1", function () {
			expect(Module.definitions["mmm-testing"].returnValue()).to.equal(value[1]);
		});
	});
});
