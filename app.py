from flask import Flask, render_template


app = Flask(__name__)
app.config.from_pyfile('config.py', silent=True)
app.config.from_pyfile('local_config.py', silent=True)


'''
    Views
'''
@app.route('/', endpoint='index')
def index():
    year = 2016
    return render_template('index.html', myvar='Home')


@app.route('/sobre-nosotros', endpoint='about')
def about():
    return render_template('about.html')
