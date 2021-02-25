# webpack-scss-js-starter-kit  

Simple foundation for your frontend project.

**Features:**

1. Loaders:

    [css-loader](https://github.com/webpack-contrib/css-loader)    
    [node-sass](https://github.com/sass/node-sass)    
    [sass-loader](https://github.com/webpack-contrib/sass-loader)
    
2. Plugins:
        
    [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)    
    [browser-sync-webpack-plugin](https://github.com/Va1/browser-sync-webpack-plugin)    
    
 **Dependencies installation**
 
    npm install
 
 **Configuration**
 
 1. Create "src" folder with entry "main.scss" file inside "scss" folder and entry "main.js" file inside "js" folder.
 2. Do additional configuration or any changes you need for your development process in "webpack.config.js" file.
 
 **Building**

    npm run build 
  
 This will create output "assets" folder with separate "css" and "js" folders and "main.min.css", "main.min.js" files inside.
 Connect "main.min.css" and "main.min.js" to your index.html or other. 
    
**Enjoy!**  