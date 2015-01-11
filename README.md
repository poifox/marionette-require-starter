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

# Compile Styles
sass --update -C --style nested css/styles.scss dist/css/styles.css
```

---

Now you will have to build the styles. If you're using Sublime Text, just go ahead, select the *Build SCSS* build system from the menu and hit `CTRL + B`.

if you

## Creating new sub apps

To create a new sub app just copy the entire `js/apps/boilerplate/` folder and rename it after your new conent type. 

For example, if you want to create a blog copy the folder from `js/apps/boilerplate/` to `js/apps/blog/`. Once this is done you must rename and entire seris of names inside the sub app, from `boilerplate` to `blog` and the capitalized version of this namespace/prefix as well.

You will also have to rename the files from `blolerplate_*.*` to `blog_*.*`.

This command will be useful for that:

```sh
cd js/apps/blog/
find . -type f | rename 's/boilerplate/blog/'
```

Finally you add the `blog_app.js` dependency to `app.js` and you should be good to go and customize the templates and actions to your schema.

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

You may also want to add a menu entry to the left-side menu on `js/fixtures/menu.js`, like so:

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

