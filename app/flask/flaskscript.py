from flask import Flask
from firebase import Firebase
from firebase_admin import db
from config import config


firebase = Firebase(config)
app = Flask(__name__)

@app.route('/')
def getRiskSchedule():
    # Add code to run data through model
    date = runTriage()
    return date


def schedule(risk_level):
  # return day as string
  return '2021-01-22'


def runTriage():
    db = firebase.database()
    users = db.child('/users').get().val()

    # Run through model here
    result = 0.7
    date = schedule(result)

    for id in users:
      if 'schedule' in users[id] and users[id]['schedule'] == '0':
        db.child('/users').child(id).update({"schedule":date})

    return date


if __name__ == '__main__':
    app.run(debug=True)