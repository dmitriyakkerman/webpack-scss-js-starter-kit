[![install size](https://packagephobia.com/badge?p=webpack-scss-js-starter-kit)](https://packagephobia.com/result?p=webpack-scss-js-starter-kit)

# webpack-scss-js-starter-kit

Simple foundation for your frontend project. 

### **Features:**

1. Loaders:

    [css-loader](https://github.com/webpack-contrib/css-loader)    
    [node-sass](https://github.com/sass/node-sass)    
    [sass-loader](https://github.com/webpack-contrib/sass-loader)   
    [file-loader](https://github.com/webpack-contrib/file-loader)
    
2. Plugins:
        
    [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)    
    [browser-sync-webpack-plugin](https://github.com/Va1/browser-sync-webpack-plugin)    
    
### **Installation**
 
    1. Go to your project directory
    2. Clone starter-kit https://github.com/dmitriyakkerman/webpack-scss-js-starter-kit.git
    3. Run npm install
 
### **Configuration**
 
 1. Create "src" folder.
 2. Create "scss" and "js" folders inside "src" folder.
 3. Create "main.scss" file inside "scss" folder and "main.js" file inside "js" folder.
 4. Import your fonts inside "scss".
 5. Do additional configuration or any changes you need for your development process in "webpack.config.js" file.
 
### **Building**

    npm run build 
  
This will create output "dist" folder with separate "css" and "js" folders with "main.min.css" and "main.min.js" files inside and also "fonts" folder.

### **Assets connection:**
  
  Connect "main.min.css" and "main.min.js" to your project.   
    
#### **Enjoy!**
