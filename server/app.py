#Import Flask object
from flask import Flask, render_template
#import socket.io
from flask_socketio import SocketIO

#flask constructor. Takes name as argument
app = Flask(__name__, template_folder='../client/dist', static_folder='../client/dist/assets')


@app.route('/', methods=['GET'])
def home():
  return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)