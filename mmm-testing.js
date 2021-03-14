/* Magic Mirror
 * Module: MMM-Testing
 *
 * By Ian Perrin https://ianperrin.com
 * MIT Licensed.
 */
Module.register("mmm-testing", {
    // Default module config.
    defaults: {
        text: "Hello World!"
    },

    getTemplate: function() {
        return "mmm-testing.njk";
    },

    getTemplateData: function() {
        return this.config;
    },

    roundValue: function(value) {
        return 1;
    }
});
