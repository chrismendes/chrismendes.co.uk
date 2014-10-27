# chrismendes.co.uk


> Personal website for web development contracting purposes. Consists of my CV, portfolio, and other useful information for the benefit of employers and recruitment agents.


## Overview

A fully responsive website accessible across desktops, tablets, and mobile phones, the site is a Single Page App (SPA) built with Backbone.js.

**Technology Breakdown**

* HTML5, CSS3, LESS
* Twitter Bootstrap
* JavaScript, jQuery, JSON
* Backbone.js, Require.js
* Grunt, Bower



## Build/Run Locally

Having checked out the project, follow the steps below:

1) Install Grunt dependencies via NPM (will create the 'node_modules' directory):

```sh
$ npm install
```

2) Install app dependencies via Bower (will create the 'src/libraries' directory):

```sh
$ bower install
```

3) Run local Node.js server and open app in browser via Grunt:

```sh
# Development version ('src' directory)
$ grunt serve

# Production version ('dist' directory)
$ grunt serve:dist

# Build to 'dist' only
$ grunt build
```

## Todo

Currently outstanding:

* About Me page
* Add missing copy on Skills > Developer Tools page
* Add phone/tablet screenshots for various projects
* Convert suitable images to spritesheets
* Thorough cross-browser and cross-device testing

Phase two and three:

* Make site crawlable by search engines (currently not)
* Create separate branch with alternative technology stack:
    * i.e. AngularJS, Foundation, Sass

## License

Copyright (c) 2014 Chris Mendes

Licensed under the MIT License