# ENVIRONMENT SETUP FOR REACT APP
I'll be showing how to set up a react development environment.

### Prerequisites
Basic knowledge of:

- Command line
- Installation through npm
- Nodejs
- JavaScript

## 1. Node.js and npm installation
Install node.js from its website as it already has npm inside it, or it can be installed separately.<br />
Here are the links to [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

## 2. Create Project folder
Create a project folder where you want to with the name for example `my-first-components-build`, or any name that you would like to choose.
Go to your command line and open the directory you just made. Type `npm init` to create a `package.json` file. The file will contain all the tools and associated tools that we would need to build our app.
Accept all the default setting and just keep hitting <b>Enter</b> until finished.

```javascript
{
  "name": "my-first-components-build",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
## 3. Add the React and ReactDOM scripts to our project
`npm install --save react react-dom`

This installs both React and ReactDom, AND any dependencies required by the two modules. You'll notice we now have a new `node_modules` directory where the modules have been added to. Any dependencies we would be adding to our app would be added in the `node_modules` folder. Keep your eyes open for any dependencies changes and additions. Just have a look at the `package.json` file and you might see some changes like this.

```json
"dependencies": {
  "react": "^15.6.1",
  "react-dom": "^15.6.1"
}
```
This happened because we specified the `--save` option in our `npm install` command. This notified npm that we wanted to keep track of our installed project dependencies. This is important if we want to share our project. Typically the `node_modules` is very large that it is not shared along with the project. You might have seen it when we commit to github we ignore the `node_modules`. So how can someone download your project and run it without `node_modules`. They just to need to run `npm install` to duplicate the setup directly from `package.json`.

<b>Note:</b> In npm 5.x, installed modules are automatically saved to package.json. You no longer have to manually specify the --save option.

## 4. Add directories and files to our project

Inside the my-first-components-build folder, create a new src folder, and add an index.js file to it. We'll come back to this later as we start to create our React app, once we've configured the project setup files.

Add an index.html file inside the same folder with the following code:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Creating a React App Manually, Using Build Tools</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

## Enabling ES6 and JSX
## 5. Babel
Using React with [Babel](https://babeljs.io) to let you use ES6 and JSX in your JavaScript cod. ES6 is a set of modern JavaScript features that make development easier, and JSX is an extension to the JavaScript language that works nicely with React.

The [Babel setup instructions](https://babeljs.io/docs/setup/) explain how to configure Babel in many different build environments. Make sure you install [babel-preset-react](http://babeljs.io/docs/plugins/preset-react/#basic-setup-with-the-cli-) and [babel-preset-env](http://babeljs.io/docs/plugins/preset-env/) and enable them in your [.babelrc configuration](http://babeljs.io/docs/usage/babelrc/), and you’re good to go.

Let's install Babel first. Type the following into the command-line window:

`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react`

If you need other modules of babel please refer to the [babel documentation](http://babeljs.io/).

## 6. webpack

[Webpack](https://webpack.js.org/) is a static module bundler for moder JavaScript applicaitons. When webpack processes your application, it recursively builds a dependency graph that includes every module our application needs, then packages all of those modules into one or more bundles.

Now, let's install Webpack, again via the command line:

`npm install --save-dev html-webpack-plugin webpack webpack-dev-server`

This installs all of the modules needed for Webpack, a local web server, and enables us to direct Webpack to create a dynamic `index.html` file in the `public` folder based on the one we added to the `src` folder. We can also add a dynamic reference to the bundled JavaScript file inside the HTML file every time the app is built.

After these new modules have been installed, your `package.json` file will now look like this:

```json

"dependencies": {
  "react": "^15.6.1",
  "react-dom": "^15.6.1"
},
"devDependencies": {
  "babel-core": "^6.25.0",
  "babel-loader": "^7.1.0",
  "babel-preset-env": "^1.5.2",
  "babel-preset-react": "^6.24.1",
  "html-webpack-plugin": "^2.28.0",
  "webpack": "^3.0.0",
  "webpack-dev-server": "^2.5.0"
}
```
If you need other modules of webpack please refer to the [webpack documentation](https://webpack.js.org/concepts/).

### 6.1 Webpack Configuration

To get Webpack to build our app and bundle it into a single file, we need to configure settings. Inside your root app folder, create `webpack.config.js`, which is used to store Webpack specific build settings.

We need Webpack to do three things:

- Compile ES6/JSX code to JavaScript (via Babel).
- Build our app, and bundle into a single JavaScript file.
- Create an index.html file, and inside add a reference to our bundled JavaScript file.

Inside webpack.config.dev.js, add:
```javascript
var path = require('path');
import webpack from 'webpack';
//todo explain the changes according reddice
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
}
```
Don't worry too much about the syntax used here; just understand the overview of what's going on.

All we're doing is exporting a JavaScript object with certain properties that control how Webpack builds our app. The `entry` property specifies the starting point of our React app, which is `index.js`. Next, the `output` property defines the output path, and filename, of the bundled JavaScript file.

As for the build process itself, we want Webpack to pass all JavaScript files through the Babel compiler to transform JSX/ES6 to standard JavaScript. We do this via the `module` property. It simply specifies a regular expression that runs Babel transformations only for JavaScript files.

To complete the Babel setup, we need to add an entry to the `package.json` file to specify which Babel transformations we want to perform on our JavaScript files. Open up `package.json` and add a `babel` property:

```javascript
"babel": {
    "presets": [ "env", "react" ]
},
```
This will run two transformations on each JavaScript file in our project. The `env` transformation will convert ES6 JavaScript to standard JavaScript that's compatible with all browsers. And the `react` transformation will compile JSX code down to `createElement()` function calls, which is perfectly valid JavaScript.

Now, back to our `webpack.config.dev.js`(webpack.config.js) file.

The last property we have is `plugins`, which contains any special operations we want performed during the build process. In our case, we need Webpack to create an `index.html` file which includes a reference to the bundled JavaScript file. We also indicate an existing `index.html` file (the one we created earlier) to be used as a template to create the final bundled `index.html` file.

### 7. Build and Test

Let's now add a `script` property to `package.json`. By the way, you can add as many scripts as you like to perform various tasks. For now, we just want to be able to run Webpack, so in `package.json` delete the `"test"` script and replace it with:

```javascript
"scripts": {
  "build": "webpack",
},
```

Before we test the build process, let's add a React component to `index.js` so we have something to render.

```JavaScript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Hello World!</h2>
            </div>
        )
    }
}

ReactDOM.render( <App />, document.querySelector( '#app' ) );
```

This should look very familiar by now if you've followed along with the previous tutorials in this series.

From the command line, run:
`npm run build`



#To be completed .. [https://code.tutsplus.com/tutorials/setup-a-react-environment-part-4--cms-29108](https://code.tutsplus.com/tutorials/setup-a-react-environment-part-4--cms-29108)

Now you are good to go.. Incase of errors please refer to the documentation as each operating system has different settings

For detail understanding you can follow this article as a tutorial as well
- [https://www.codecademy.com/articles/react-setup-i](https://www.codecademy.com/articles/react-setup-i)
- check out the first 3 videos for setting up your project. [https://www.youtube.com/watch?v=e0dN1w1gJJM&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=3](https://www.youtube.com/watch?v=e0dN1w1gJJM&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=3)

### References
I don't bear any possession to this article as it totally for learning purposes from open sourse articles which are mentioned below

[https://reactjs.org/docs/installation.html](https://reactjs.org/docs/installation.html)

[https://code.tutsplus.com/tutorials/setup-a-react-environment-part-4--cms-29108](https://code.tutsplus.com/tutorials/setup-a-react-environment-part-4--cms-29108)
