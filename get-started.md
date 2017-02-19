---
layout: page
title: Get Started
align: left
permalink: /get-started/
---

# Get Started

The 

New to Footwork? Here are a few specific things you might want to check out first:

* [Architecture / Overall Philosophy](http://docs.footworkjs.com/release/latest/architecture/)
* [Latest Documentation](http://docs.footworkjs.com/release/latest)

## Installing

To begin, you must first install/download Footwork:

* You can install via bower:

  ```bash
  bower install footwork --save
  ```

* ...or you can install via npm:

  ```bash
  npm install footwork --save
  ```

* ...or you can download it directly:

  [https://github.com/footworkjs/footwork/blob/2.0.0/dist](https://github.com/footworkjs/footwork/blob/2.0.0/dist)

## Linking

After that, you need to include it in your webapp somehow. Footwork is provided with a [UMD wrapper](https://github.com/umdjs/umd#umd-universal-module-definition), which means that it can be loaded using most script loaders.

Below is an example using normal script tags (adjust accordingly for your preferred script loader, see also: [Dynamic Loading of Assets](#dynamic-loading-of-assets)):

```html
<html>
  <head>
    <title>My Awesome Application</title>

    <!-- (optional) Need this for animation support -->
    <link rel="stylesheet" href="bower_components/footwork/dist/footwork.css">
  </head>

  <body>
    <!-- ... application markup goes here ... -->

    <!-- Footwork framework -->
    <script src="bower_components/footwork/dist/footwork.js"></script>

    <!-- Your code -->
    <script src="scripts/my-script.js"></script>
  </body>
</html>
```

## Starting The Application

Once all of your application code has been loaded and you have performed any configuration and registration of components/viewModels/etc, as well as any other startup logic - you will want to start your application. There are two primary ways to accomplish that:

* `fw.start`

    Using this method you can simply tell Footwork to start processing the DOM. Instantiation of your application then depends on the declarative [viewModels](http://docs.footworkjs.com/release/latest/viewModel-usage/), [dataModels](http://docs.footworkjs.com/release/latest/dataModel-usage/), [routers](http://docs.footworkjs.com/release/latest/router-usage/), [components](http://docs.footworkjs.com/release/latest/component-custom-elements/), etc that you define in the view.

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

    Once `fw.applyBindings` has been called all descendant declarations to the root node will be processed. This means any nested viewModels/components/etc will be instantiated and bound per their registrations/configurations/etc.

## Browser Support and Polyfills

Footwork is an ES5-based library and utilizes a couple of the newer ES6 features such as [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This means that it needs at least IE9 or later, and might require that you load some polyfills (if [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) are not natively supported by your browser).

If you require the polyfills, then the following ones are recommended (they are the ones run with the unit tests, although any ES6 fetch and promise polyfills should work):

* [https://github.com/stefanpenner/es6-promise](https://github.com/stefanpenner/es6-promise)
* [https://github.com/github/fetch](https://github.com/github/fetch)

Depending on your preferred package manager, they are both available via [bower](http://bower.io) and [npm](https://www.npmjs.com/):

* Install via [bower](http://bower.io)

    ```bash
    bower install es6-promise fetch --save
    ```

* Install via [npm](https://www.npmjs.com/)

    ```bash
    npm install es6-promise whatwg-fetch --save
    ```
    
    Note that *whatwg-fetch* on [npm](https://www.npmjs.com/) is the same thing as *fetch* from [bower](http://bower.io), it is just released under a different name.

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

    <!-- Footwork framework -->
    <script src="bower_components/footwork/dist/footwork.js"></script>

    <!-- Your code -->
    <script src="scripts/my-script.js"></script>
  </body>
</html>
```

## Dynamic Loading of Assets

One of Footworks nice features is the ability to load your components/[viewModels](http://docs.footworkjs.com/release/latest/viewModel-registration/#location-registration)/[dataModels](http://docs.footworkjs.com/release/latest/dataModel-registration/#location-registration)/[routers](http://docs.footworkjs.com/release/latest/router-registration/#location-registration) at runtime when needed.

In order To use those features you will need to ensure [RequireJS](http://requirejs.org) is installed and linked. Footwork also requires the supporting [text plugin](https://github.com/requirejs/text) to load your template/html files dynamically as well.

You can install these dependencies via [bower](http://bower.io) and [npm](https://www.npmjs.com/):

* Install via [bower](http://bower.io)

    ```bash
    bower install requirejs requirejs-text --save
    ```

* Install via [npm](https://www.npmjs.com/)

    ```bash
    npm install requirejs requirejs-text --save
    ```

And to load these you would do something like so:

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

    <!-- RequireJS -->
    <script src="bower_components/requirejs/require.js"></script>
    <script src="bower_components/text/text.js"></script>

    <!-- Footwork framework -->
    <script src="bower_components/footwork/dist/footwork.js"></script>

    <!-- Your code -->
    <script src="scripts/my-script.js"></script>
  </body>
</html>
```

The above example shows a lot of ugly script tags...and whats worse is that they may cause significant lag when loading these dependencies sequentially.

It is important to remember that if you are using RequireJS you will typically load everything via RequireJS itself. This allows you to get rid of most of the script tags and allows you to optimize your application into a single file when you are ready to deploy into a production environment.

A brief example of this is shown here:

* The main HTML file:

    ```html
    <html>
      <head>
        <title>My Awesome Application</title>

        <!-- (optional) Need this for animation support -->
        <link rel="stylesheet" href="bower_components/footwork/dist/footwork.css">
      </head>

      <body>
        <!-- ... application markup goes here ... -->

        <script src="bower_components/requirejs/require.js" data-main="/path/to/main/script"></script>
      </body>
    </html>
    ```

* The main `script.js` file:

    ```javascript
    require.config({
      paths: {
        "text": "/bower_components/text/text",
        "footwork": "/bower_components/footwork/dist/footwork",
        "es6-promise": "/bower_components/es6-promise/es6-promise",
        "fetch": "/bower_components/fetch/fetch"
      }
    });

    require(['footwork', 'es6-promise', 'fetch'],
      function (fw, promise) {
        // Promise polyfill requires an explicit call (fetch does not)
        promise.polyfill();

        // Your code goes here
        fw.start();
      }
    );
    ```

Much better, RequireJS will take care of the heavy lifting for us now. And whats even better, with a bit more work we can utilize the RequireJS optimizer and compile our code down into a single file (including templates).

For more detailed information see: [How to get started with RequireJS](http://requirejs.org/docs/start.html).
