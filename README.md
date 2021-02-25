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
 
 1. Create "src" folder.
 2. Create "scss" and "js" folders inside "src" folder.
 3. Create "main.scss" file inside "scss" folder and entry "main.js" file inside "js" folder.
 2. Do additional configuration or any changes you need for your development process in "webpack.config.js" file.
 
 **Building**

    npm run build 
  
 **Output**
  
 This will create output "assets" folder with separate "css" and "js" folders and "main.min.css", "main.min.js" files inside.

  **Assets connection:**
  
  Connect "main.min.css" via link tag and "main.min.js" via script tag to your index.html or other.   
    
**Enjoy!**  