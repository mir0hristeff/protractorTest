import { Config, browser } from "protractor";


export let config: Config = {
    framework : "jasmine",

    // jasmineNodeOpts:{
    //     showColors : true,
    //     silent : true,
    //     defaultTimeoutInterval: 36000,
    //     print: function(){}
    // },

    capabilities:{
        browserName : 'chrome',
        chromeOptions: {'args': ['disable-infobars']},
        //browserName : 'firefox',
        //marionette : true,
        acceptSslCerts : true
    },

    onPrepare:()=>{
        //var os = require('os');
       // let globals = require('protractor');
        //let browser = globals.browser;
       // browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
       },

    specs:['./e2e/src/test/sut.e2e-spec.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub'
}