const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  // Override start method.
  start: function () {},

  // Override socketNotificationReceived received.
  socketNotificationReceived: function (notification, payload) {},

  callApi: function () {
    return 1;
  }
});
