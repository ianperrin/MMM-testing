const expect = require("chai").expect;
const moduleAlias = require('module-alias');

describe("Functions into node_helper.js", function () {
	before(function () {
		console.log("Before function");
		moduleAlias.addAlias('node_helper', "../../js/node_helper.js")
		require("../node_helper.js");
	});

	describe("callApi", function () {
		console.log("callApi tests...");
		it(`for 1 should be return 1}`, function () {
			expect(NodeHelper.callApi()).to.equal(1);
		});
	});
});
