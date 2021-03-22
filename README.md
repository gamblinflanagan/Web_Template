# Cannibiz-site
## Created March 22nd 2021
## This application will be the main webiste for Cannibiz

### Languages used

python
html
css
javascript (react.js, node.js)

### To Use:

#### Download stuff:
* Download and install Git `https://git-scm.com/download/win`
* Download and install VS code `https://code.visualstudio.com`
* Download and install the latest version of python `https://www.python.org/downloads/`



#### Setting up in Vs code
* create a directory or workspace to clone repo
* Open VS code click view then command palette
* type `Git: Clone` then click enter 
* copy and paste this link in the text box and click enter `https://github.com/Cannibiz/Cannibiz`
* choose the directory to clone the repo to  
* login to github with this access token `fd81e4cc786ddd20f7667d8636c1efa0d9438488`
* after cloning process is complete click open
* install python extension in vs code (pop up should come up)

### Important

* open a terminal in vs code
* type `git checkout -b "your branch name here`
* type `git pull origin master`
### DO NOT EVER PUSH TO MASTER BRANCH

#### Installing Flask
* open a termnal in vs code and type `python3 -m venv`
* if pop up asks if you want to select this environment for the workspace click yes
* install any libraies if they popup
* type in the terminal `venv\Scripts\activate` 
* run the command `pip instal flask`
* more info `https://flask.palletsprojects.com/en/1.1.x/installation/`


### To run: 

* make sure the file app.py is open and selected
* click the run and debug button on the left most panel or press ctr+shift+d
* click Run and Debug
* click Flask in the dropdown menue
* ctr+click the link `http://127.0.0.1:5000/` in the terminal

### To push code to github

* run `git status`
* run `git add "name of file to add` or `git add .` to add all files
* run `git commit -m "what you changed"`
* run `git push -u origin "your branch name"`
