# Flask-React Web App Template
## Created March 28th 2021
## This application will serve as a template for furutre projects

### Languages used

python
html
css
javascript (react.js, node.js)

### To Use:

#### Download and install stuff:
* Download and install Git `https://git-scm.com/download/win`
* Download and install VS code `https://code.visualstudio.com`
* Download and install the latest version of python `https://www.python.org/downloads/`
* Download and install the latest LTS version of Node.js (.msi for windows, .pkg for mac os) `https://nodejs.org/en/download/` 



#### Setting up in Vs code
* create a directory or workspace to clone repo
* Open VS code click view then command palette
* type `Git: Clone` then click enter 
* copy and paste this link in the text box and click enter `https://github.com/gamblinflanagan/Web_Template`
* choose the directory to clone the repo to  
* login to github on the web browser
* after cloning process is complete click open
* install python extension in vs code (pop up should come up)

### IMPORTANT
* open a terminal in vs code
* change remote to your repo - enter `git remote set-url origin "link to your git repo"`


#### Installing Flask
* open a termnal in vs code and type `python3 -m venv venv`
* if pop up asks if you want to select this environment for the workspace click yes
* install any libraies if they popup
* type in the terminal in vs code if windows - `venv\Scripts\activate` if mac - `venv/Scripts/activate`
* click View in the top nav bar and select command pallet
* type `Python: Select Interpreter` and press enter
* select the one with `(venv)` in the description
* run the command i vs code terminal `pip install flask`
* more info `https://flask.palletsprojects.com/en/1.1.x/installation/`

### Installing Yarn, React, WebPack
## Alternative to below run `yarn install`
* open a terminal in vs code and run the command `npm install --global yarn`
*  run the command `yarn add react react-dom`
*  run the command `yarn add -D webpack webpack-cli webpack-dev-server`
*  run the command `yarn add -D style-loader css-loader`
*  run the command `yarn add --dev "@babel/preset-env"`
*  run the command `yarn add --dev "@babel/core"`
*  run the command `yarn add --dev "@babel/preset-react"`
*  run the command `yarn add --dev "@babel/runtime"`
*  run the command `yarn add --dev "babel-loader"`
*  run the command `yarn add --dev "file-loader"`
*  run the command `yarn add react-router-dom`
*  run the command `yarn add bootstrap`
*  run the command `yarn add bootstrap react-bootstrap`


### To run: 
* run command in terminal in vs code `yarn webpack --mode development --watch`
* run command in a new terminal in vs code `python -m flask run`
* ctr+click the link `http://127.0.0.1:5000/` in the terminal

### IMPORTANT
* when changes are made to html/js/css the cache might need to be cleared to see changes
* This extension is recomended (works in chrome and opera) `https://chrome.google.com/webstore/detail/clear-browsing-data/bjilljlpencdcpihofiobpnfgcakfdbe?hl=en`


### To push code to github
* run `git status`
* run `git add "name of file to add` or `git add .` to add all files
* run `git commit -m "what you changed"`
* run `git push -u origin "your branch name"`
