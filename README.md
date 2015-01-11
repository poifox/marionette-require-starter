# marionette-require-starter

A little Marionette + RequireJS app for kick-starting new projects.

This repo has a LOT of influence from [David Sulc's](https://twitter.com/davidsulc) books on Marionette which you can get from [Leanpub](https://leanpub.com/u/davidsulc), you should check them out ;)

---

## Getting started

You'll need node/npm and bower to get all the dependencies, and the sass gem to compile the SCSS style source.

```sh
# Sass
<package-manager> install gems
sudo gem install sass

# Bower
npm install -g bower

# Get the dependencies
cd path/to/marionette-require-starter/
npm install
bower install

```

---

Now you will have to build the styles. If you're using Sublime Text, just go ahead, select the *Build SCSS* build system from the menu and hit `CTRL + B`.

If you're using SASS the CLI way then run this:

```sh
sass --update -C --style nested css/styles.scss dist/css/styles.css
```

The boilerplates sub-app is fully functional (though extremely basic) and uses your browser's LocalStorage for persistence, you will want to remove some lines form the `entities/boilerplate.js` in order to make it communicate with your server.

## Creating new sub apps

Let's say you want to make a new sub app to power blog posts.

You will have to copy the boilerplate app into a new folder like this, and its entities as well:

```sh
# Recursively copy the contents of boilerplate app
cp -r js/apps/boilerplate js/apps/posts
cp -r js/entities/boilerplate.js js/entities/posts.js
```

Now, some files will drag the boilerplate namespacing with them, in both file name and variable names, You will want to change that. Let's first rename the `boilerplate_*` files

```sh
find js/apps/posts -type f | rename 's/boilerplate/post/'
find js/apps/posts -type f | rename 's/boilerplate/post/'
```

Next the names of variables have to be changed, there are many mentions in the files so this has to be batch processed. If you're on Sublime Text or any editor that supports batch replacement across folders you'll be fine doing it from there, just change `boilerplate` into `post` and `Boilerplate` into `Post`.

For CLI batch processing do this:

```sh
find js/apps/posts -type f -exec sed -r -i 's/boilerplate/post/g' {} \;
find js/apps/posts -type f -exec sed -r -i 's/Boilerplate/Post/g' {} \;
```


Once you're don with this, you must add a menu entry in `fixtures/menu.js`

```js
getLeftMenu: function() {
    return new Fixtures.MenuCollection([
        // {name: "Home", url: "/", trigger: "boilerplate:home"},
        {name: "Boilerplates", url: "/boilerplates", trigger: "boilerplate:index"},
        {name: "Blog", url: "/blog", trigger: "blog:index"},
        {name: "About", url: "/about", trigger: "static:about"}
    ]);
},
```

Finally you have to include your app in the `js/app.js` so it's loaded at runtime so your routes work.

```js
App.on("start", function() {
    require([
        "apps/common/views",
        // Your sub-apps here
        "apps/static/blog_app",
        "apps/boilerplate/boilerplate_app"
        ],
        function() {
            if (Backbone.history) {
                Backbone.history.start({
                    pushState: true // You may not need this
                });
            }
        });
});

return App;
```

