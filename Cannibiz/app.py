import sys
import os
import flask 




''' This Function creates the front end portion of the web application '''
app = flask.Flask(__name__)
@app.route('/') # Python decorator
def index():
    print("reached index method")
    return flask.render_template("index.html")
'''
@app.route('/second') # starts app
def second():
    return flask.render_template("second.html")

@app.route('/third') # starts app
def third():
    return flask.render_template("third.html")
'''
if __name__ == '__main__':
    app.run(
        host=os.getenv('IP', '0.0.0.0'),   #local host ip
        port=int(os.getenv('PORT', 8080)), #local port
        debug=True
    )
    
    
    
    
    
    
    
    
    
    
'''
# Cannibiz-site
## Created March 22nd 2021
## This application will be the main webiste for Cannibiz

### Languages used

python
html
css
javascript (react.js, node.js)

### To Use:

* Open a terminal shell and navigate to the desired directory 
* Run `git clone https://github.com/Cannibiz/Cannibiz-site.git`


### To run: 


'''
