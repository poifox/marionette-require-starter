# marionette-require-starter

A little Marionette + RequireJS app for kick-starting new projects.

This repo has a LOT of influence from [David Sulc's](https://twitter.com/davidsulc) books on Marionette which you can get from [Leanpub](https://leanpub.com/u/davidsulc), you should check them out ;)

---

## Getting started

You'll need node/npm and bower to get all the dependencies, and the sass gem to compile the SCSS style source.

```sh
# Sass
$ <package-manager> install gems
$ sudo gem install sass

# Bower
$ npm install -g bower

# Get the dependencies
$ cd path/to/marionette-require-starter/
$ npm install
$ bower install

```

---

Now you will have to build the styles which are based on Zurb's Foundation. If you're using Sublime Text, just go ahead, select the *Build SCSS* build system from the menu and hit `CTRL + B`.

If you're using SASS the CLI way then run this:

```sh
$ sass --update -C --style nested css/styles.scss dist/css/styles.css
```

The boilerplates sub-app is fully functional (though extremely basic) and uses your browser's LocalStorage for persistence, you will want to remove some lines form the `entities/boilerplate.js` in order to make it communicate with your server.

## Creating new sub apps

Since 0.1.0 it's much easier to generate a new sub app, just into the project root and execute the `generate` script like this:

```sh
# You must provide the model name for your sub-app
# Capitalized and singular name, like this:
$ ./generate Posts

# You can also simply execute ./generate and the script 
# will ask you for the Capitalized, singular model name
$ ./generate
```

To make your app load as soon as the page loads, you have to include your app in the `js/app.js` so it's loaded at runtime so your routes work, you can also (and should) disable the boilerplate app:

```js
App.on("start", function() {
    require([
        "apps/common/views",
        // Your sub-apps here
        "apps/static/blog_app",
        // "apps/boilerplate/boilerplate_app"
        ],
        // Edited for brevity
});

return App;
```

If you want a menu item on the header then you must add a menu entry in `fixtures/menu.js`; you can also (and should) disable the menu entry for the boilerplate app

```js
getLeftMenu: function() {
    return new Fixtures.MenuCollection([
        {name: "Home", url: "/", trigger: "static:home"},
        // {name: "Boilerplates", url: "/boilerplates", trigger: "boilerplate:index"},
        {name: "Blog", url: "/blog", trigger: "blog:index"},
        {name: "About", url: "/about", trigger: "static:about"}
    ]);
},
```

