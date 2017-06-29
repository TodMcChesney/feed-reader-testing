# Feed Reader Testing

This is my version of Project #6 for the Front-End Web Developer
Nanodegree. I used [Jasmine](http://jasmine.github.io/) for all of the
testing.

## Getting Started

### To View Project Locally

First clone or download the repo to your local computer. Then navigate
to the projects root folder and open the index.html file in your browser
. This will show you the web application with all of the test results at
the bottom of the web page.

### To View Project Live

Follow this link [https://todmcchesney.github.io/feed-reader-testing/](
https://todmcchesney.github.io/feed-reader-testing/).

## Tests

#### RSS Feeds:
* The allFeeds var is defined
* Each feeds URL is defined and not empty
* Each feeds name is defined and not empty

#### The Menu:
* The slide out menu is hidden by default
* When the menu icon is clicked the menu shows/hides

#### Initial Entries:
* The feed container has at least 1 entry

#### New Feed Selection:
* The feed content changes when a new feed is selected

To see the code for the tests open the /jasmine/spec/feedreader.js file.
