# chrismendes.co.uk


> Personal website for web development contracting purposes. Consists of my CV, portfolio, and other useful information for the benefit of employers and recruitment agents.


## Overview

A fully responsive website accessible across desktops, tablets, and mobile phones, the site is a Single Page App (SPA) built with Backbone.js.

**Technology Breakdown**

* HTML5, CSS3, LESS
* Twitter Bootstrap
* JavaScript, jQuery, JSON
* Backbone.js, Require.js


## Build/Run Locally

Having checked out the project, following the steps below:

1) Install Grunt dependencies via NPM (will create the 'node_modules' directory):

```sh
$ npm install
```

2) Install app dependencies via Bower (will create the 'src/libraries' directory):

```sh
$ bower install
```

3) Run the app via Grunt:

```sh
# Development version
$ grunt serve

# Production version
$ grunt serve:dist
```

## Todo

Currently outstanding:

* About Me page
* Add missing copy on Skills > Developer Tools page
* Add phone/tablet screenshots for various projects
* Convert suitable images to spritesheets
* Thorough cross-browser and cross-device testing


## License

Copyright (c) 2014 Chris Mendes

Licensed under the MIT License