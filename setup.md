# Setting up the webpack project

##  Create project directory 

`mkdir _project_ && cd _project_`

`mkdir src`    

`mkdir src/static src/modules`   

`touch src/index.js src/template.html`


##  Create a package.json
To create a default one use:

`npm init -y`


##  Install webpack. 
Runs with `npx webpack` and outputs the project contents in the **dist** directory

`npm install --save-dev webpack webpack-cli`


##  Create a webpack config file 

The project template already have one. `touch webpack.config.js`


##  Handling HTML HtmlWebpackPlugin 

`npm install --save-dev html-webpack-plugin`


##  Loading CSS (imported on JS) 

`npm install --save-dev style-loader css-loader`

  
##  Loading images from the HTML (not css nor js)
We use html-loader to load images from an html file like **template.html**

`npm install --save-dev html-loader`


##  Installing Webpack dev server

Runs with `npx webpack serve` and is hosted on <http://localhost:8080/>

`npm install --save-dev webpack-dev-server`


