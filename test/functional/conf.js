'use strict';

var browserWidth = 1280,
    browserHeight = 1024;

exports.config = {

    baseUrl: 'http://dev.hmda-pilot.ec2.devis.com/',

    specs: ['cucumber/*.feature'],

    allScriptsTimeout: 30000,
    getPageTimeout: 30000,

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'cucumber',
    cucumberOpts: {
        require: 'cucumber/step_definitions/*.js',
        tags: ['~@wip', '~@ignore'],
        format: 'progress'
    },

    onPrepare: function() {
        browser.driver.manage().window().setSize(browserWidth, browserHeight);
    }
};
