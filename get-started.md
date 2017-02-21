---
layout: page
title: Get Started
align: left
permalink: /get-started/
---

This document assumes a reasonable understanding of javascript, html, and css. If you are brand new to frontend development you might want to learn the language and basics of html to begin with...it's worth it, and will help *immensely* regardless of what framework you end up using.

By far, the fastest route to get Footwork running is including it via the CDN with a simple script tag:

```html
<script src="https://unpkg.com/footwork/dist/footwork.js"></script>
```

Thats all you need, toss that script tag into an HTML file and get started right away. For a super quick demo/example, take a look at the [Hello World jsFiddle](https://jsfiddle.net/footwork/2yutum92/).

## Installing

For a more defined project you may want to install/configure it as a dependency. Footwork is served up via the two most common frontend packagers, bower and npm:

* To install via bower:

    ```bash
    bower install footwork --save
    ```

* To install via npm:

    ```bash
    npm install footwork --save
    ```

* To download it directly:

    [https://unpkg.com/footwork/dist/footwork.js](https://unpkg.com/footwork/dist/footwork.js)

    [https://unpkg.com/footwork/dist/footwork.css](https://unpkg.com/footwork/dist/footwork.css) (optional, for animations)

## The Basics

Footwork is largely declaratively-based, logic is modularized within view models bound against those declarations. Using two-way bindings and simple constructor functions you can build rich user interfaces.

### Views and View Models

An example view:

```html
<viewModel module="Person" params="name: 'Jill'">
  My name is <span data-bind="text: name"></span>
  
  <button data-bind="click: sayHello">Say Hello</button>
  <span data-bind="text: response"></span>
</viewModel>
```

In the example above we declare a single viewModel `Person` with some markup inside of it. When the application is started Footwork will iterate over the view, find the viewModel declaration, match that up with the registered viewModel, and then instantiate and bind it.

An example view model which we might bind against the view above:

```javascript
fw.viewModel.register('Person', function (params) {
  var self = fw.viewModel.boot(this, {
    namespace: 'Person'
  });
  
  self.name = params.name;
  self.response = fw.observable();
  self.sayHello = function () {
    self.$namespace.publish('hello', self);
  };
  
  self.$namespace.subscribe('hello', function (from) {
    if (from.name !== self.name) {
      self.response('Hello ' + from.name);
    } else {
      self.response(undefined);
    }
  });
});

// Start the application
fw.start();
```

There are several different types of view models and ways to create them. Some have additional features or advantages depending on your needed use, see [Creating View Models](http://docs.footworkjs.com/release/latest/architecture/#creating-view-models).

For further reading on how Footwork applications are structured and work in general, see the [architecture documentation](http://docs.footworkjs.com/release/latest/architecture/).

### Starting The Application

There are two ways of kickstarting your application:

* `fw.start`

    Using this method you can simply tell Footwork to start processing the DOM. Instantiation of your application then depends on the declarative elements that you define in the view.

    ```javascript
    fw.start();
    ```

    You can optionally pass it a root-node you want it to begin processing on (by default it assumes `document.body`):

    ```javascript
    fw.start(document.getElementById('my-app'));
    ```

    Once `fw.start` has been called all descendant declarations to the root node will be processed. This means any nested viewModels/components/etc will be instantiated and bound per their registrations/configurations/etc.

* `fw.applyBindings`

    This method allows you to instantiate and bind a specific view model when binding to the view.

    ```javascript
    fw.applyBindings(new MyViewModel());
    ```

    You can optionally pass it a root-node you want it to begin processing on (by default it assumes `document.body`):

    ```javascript
    fw.applyBindings(new MyViewModel(), document.getElementById('my-app'));
    ```

    Once `fw.applyBindings` has been called all descendant declarations to the root node will be processed as well. This means any nested viewModels/components/etc will be instantiated and bound per their registrations/configurations/etc.

## Browser Support and Polyfills

Footwork is an ES5-based library and utilizes a few of the newer ES6/HTML5 features such as:

* [ES6 fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [ES6 promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [HTML5 History](http://diveintohtml5.info/history.html).

This means that it needs at least IE9 or later, and might require that you load some polyfills (if any of the aforementioned are not natively supported by a browser you need to support).

If you require polyfills, then the following ones are recommended (they are the ones run with the tests):

* [https://github.com/stefanpenner/es6-promise](https://github.com/stefanpenner/es6-promise)
* [https://github.com/github/fetch](https://github.com/github/fetch)
* [https://github.com/devote/HTML5-History-API](https://github.com/devote/HTML5-History-API)

Depending on your preferred package manager, they are available via [bower](http://bower.io) and [npm](https://www.npmjs.com/):

* Install via [bower](http://bower.io)

    ```bash
    bower install es6-promise fetch html5-history-api --save
    ```

* Install via [npm](https://www.npmjs.com/)

    ```bash
    npm install es6-promise whatwg-fetch html5-history-api --save
    ```

    *whatwg-fetch* on [npm](https://www.npmjs.com/) is the same thing as *fetch* from [bower](http://bower.io), it is just released under a different name.

These polyfills need to be loaded prior to Footwork. Here is an example using normal script tags (adjust accordingly for your preferred script loader):

```html
<html>
  <head>
    <title>My Awesome Application</title>

    <!-- (optional) Need this for animation support -->
    <link rel="stylesheet" href="bower_components/footwork/dist/footwork.css">
  </head>

  <body>
    <!-- ... application markup goes here ... -->

    <!-- polyfills -->
    <script src="bower_components/es6-promise/es6-promise.auto.js"></script>
    <script src="bower_components/fetch/fetch.js"></script>
    <script src="bower_components/html5-history-api/history.js"></script>

    <!-- Footwork framework -->
    <script src="bower_components/footwork/dist/footwork.js"></script>

    <!-- Your code -->
    <script src="scripts/my-script.js"></script>
  </body>
</html>
```
