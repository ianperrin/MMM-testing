const expect = require("chai").expect;
const moduleAlias = require('module-alias');

describe("Functions into node_helper.js", function () {
	before(function () {
		console.log("node_helper before function");
		moduleAlias.addAlias('node_helper', "../../js/node_helper.js");
		var Module = require("../node_helper.js");
		m = new Module();
		m.setName("mmm-testing");
//		m.setPath(path.resolve("../"));
	});

	describe("callApi", function () {
		console.log("callApi tests...");
		it(`for 1 should be return 1`, function () {
			expect(m.callApi()).to.equal(1);
		});
	});
});
