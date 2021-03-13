const expect = require("chai").expect;

describe("Functions into mmm-testing.js", function () {
	before(function () {
		console.log("Before function");
		Module = {};
		config = {};
		Module.definitions = {};
		Module.register = function (name, moduleDefinition) {
			Module.definitions[name] = moduleDefinition;
		};
		require("../mmm-testing.js");
		Module.definitions["mmm-testing"].config = {};
	});

	describe("roundValue", function () {
		console.log("Here");
		it(`for 4 should be return 1}`, function () {
			expect(Module.definitions["mmm-testing"].roundValue(4)).to.equal(1);
		});
	});
});
