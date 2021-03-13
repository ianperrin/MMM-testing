const expect = require("chai").expect;

describe("Functions into node_helper.js", function () {
	before(function () {
		console.log("Before function");
		require("../node_helper.js");
	});

	describe("callApi", function () {
		console.log("Here");
		it(`for 1 should be return 1}`, function () {
			expect(1).to.equal(1);
		});
	});
});
