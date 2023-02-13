from flask import Flask, render_template
import sqlite3

conn = sqlite3.connect('server.db')
sql = conn.cursor()

sql.execute('''CREATE TABLE if NOT exists (
    login, TEXT
    password, TEXT''')

conn.commit()

app = Flask(__name__)


@app.route('/')
def index():
    return "index"


@app.route('/about')
def about():
    return render_template('site_back.html')


if __name__ == '__main__':
    app.run(debug=True)
