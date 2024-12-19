# Info about this webpack project template


## setup.md

contains the step by step for setting up a base webpack dev enviroment


## deployment.md

contains the step by step for deploying the project to github pages


## package_.json

contains npm scripts for running webpack in development (`npm run dev`) and prod (`npm run build`) modes.  
As well as for deployment to github pages


## webpack.config.js

is the base configuration file, with everything needed to run the project succesfully. Loading html, css and images



## Using separate Webpack config files

To work with separate config files for different modes, there are the Webpack **common**, **dev**, and **prod** config files that work using **`webpack-merge`**.   
They share the same base configuration as *webpack.config.js*.

- webpack.config.js (replaced)
- webpack.common.js
- webpack.dev.js
- webpack.prod.js


### Installing webpack-merge

This allows us to use separate webpack configuration files for different modes, and merge them in a common config file


#### `npm install --save-dev webpack-merge`


### Source map values as devtools

These are three valid source map values as `devtool`'s for tracking erros in the logic.

* `source-map` (recommended for prod mode as well)
* `eval-source-map`
* `inline-source-map`