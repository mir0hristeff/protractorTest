import { browser } from "protractor";

describe("MyFirstTest", function() {

    beforeEach( function() {
        browser.get('https://angularjs.org/');
    });

    it("Go to angular site", function() {

        browser.sleep(3000);
    });
})