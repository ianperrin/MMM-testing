const expect = require("chai").expect;
const moduleAlias = require("module-alias");
var helper;

describe("Functions in node_helper.js", function () {
  before(function () {
    moduleAlias.addAlias("node_helper", "../../js/node_helper.js");
    var Module = require("../node_helper.js");
    helper = new Module();
    helper.setName("mmm-testing");
  });

  describe("callApi", function () {
    it(`for 1 should be return 1`, function () {
      expect(helper.callApi()).to.equal(1);
    });
  });
});
