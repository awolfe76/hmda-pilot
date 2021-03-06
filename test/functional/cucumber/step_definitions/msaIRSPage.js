/* jshint expr:true, -W079 */
'use strict';

var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

module.exports = function() {
    this.When(/^I click on the '([^']*)' report link$/, function(reportName, next) {
        var reportLink = element(by.linkText(reportName));
        reportLink.click().then(function() {
            next();
        });
    });

    this.Then(/^I will see the '([^']*)' report$/, function(reportName, next) {
        expect(element(by.id(reportName)).isPresent()).to.eventually.be.true.notify(next);
    });

    this.Then(/^I will see a certification of accuracy$/, function(next) {
        expect(element(by.id('verify')).isPresent()).to.eventually.be.true.notify(next);
    });

    this.Then(/^I will see a verification for all errors$/, function(next) {
        expect(element(by.id('selectAll')).isPresent()).to.eventually.be.true.notify(next);
    });
};
