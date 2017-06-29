/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* Test suite named 'RSS Feeds' */
    describe('RSS Feeds', function() {
        // Test allFeeds to ensure it is defined and that it's not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test each feed to ensure it has a URL defined and it's not empty
        it('have URLs', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // Test each feed to ensure it has a name defined and it's not empty
        it('have names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /* Test suite named "The menu" */
    describe('The menu', function() {
        var body = $('body');
        var menuIcon = $('.menu-icon-link');

        // Test to ensure the menu element is hidden by default
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // Test the menu show/hide toggle when icon is clicked
        it('changes visibility when the icon is clicked', function() {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        // Before the test runs call loadFeed() with async done() callback
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // Then test to make sure that the .feed container is not empty
        it('have loaded', function(done) {
            expect($('.feed')).not.toBe(':empty');
            done();
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
