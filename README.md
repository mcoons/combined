# Combined

This is a project site combining some of my projects into an SPA using Angular.  [www.michaelcoons.tech](https://www.michaelcoons.tech)

## Why I built this application

My previous project site was looking outdated and was hard to maintain.  I wanted to apply my new Angular knowledge to create a better looking site that was more mobile friendly.  I also wanted a simpler way to be able to add new projects which this implementation achieves.

## General Implementation Description

* Everything is driven from the arrays of app data objects in [appData.ts](https://github.com/mcoons/combined/blob/main/src/app/appData.ts) which the other components import.  This includes the cards displayed on the home page as well as the Navigation menus.

* Different projects are displayed through the [Frame component](https://github.com/mcoons/combined/blob/main/src/app/frame/frame.component.ts) using an iframe.  The destination is passed by the route and the ActivatedRoute parameter which is used for a url Dictionary lookup in the Frame component.

* Messaging and URL parameters are partially implemented to allow the child Project to know it is in a frame and to pass information back to this app.  *(Still in development on the child side.)*

* New projects can be dynamically added just by updating the appData object and urlDictionary.  

* Projects are hosted at multiple locations utilizing Github Pages, Heroku and Firebase.

## Current Issues

* Some projects are not as frame friendly as others.  Some projects are not as mobile friendly as others.  This is due to when the projects were created and my knowledge at that time. 

* External links to some sites don't allow their content to be displayed in iFrames.

## Future Additions/Fixes when I get time

* Moving the url Dictionary entries into the appData objects so everything is in one convenient place.  This should make adding a new project even simpler.

* Adding the ability to view projects in a new tab if there are issues as mentioned above.

* Revisiting the older projects to fix some of the frame/mobile issues.

* CREATE AND ADD MORE PROJECTS!

