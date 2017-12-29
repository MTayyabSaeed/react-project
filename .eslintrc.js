module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "allowImportExportEverywhere": false,
            "codeFrame": false
        },
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            0,
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-console": 0
    },
    "no-unused-vars": 0,
    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
                                           // default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "15.0", // React version, default to the latest React stable release
        "flowVersion": "0.53" // Flow version
      },
      "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                     // propTypes object, e.g. `forbidExtraProps`.
                                                     // If this isn't set, any propTypes wrapped in
                                                     // a function will be skipped.
    }

};
