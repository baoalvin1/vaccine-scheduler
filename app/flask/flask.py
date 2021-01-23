from flask import Flask
from firebase import Firebase
from firebase_admin import db

config = {
  "apiKey": "AIzaSyBZkbEvb2Cixmnekw8OMC6gSXdRNprk6Lw",
  "authDomain": "vaccinescheduler-6a076.firebaseapp.com",
  "databaseURL": "https://vaccinescheduler-6a076-default-rtdb.firebaseio.com/",
  "projectId": "vaccinescheduler-6a076",
  "storageBucket": "vaccinescheduler-6a076.appspot.com",
  "messagingSenderId": "463255180859",
  "appId": "1:463255180859:web:117ae2ee3e01efe0ad2e1e"
}

firebase = Firebase(config)
app = Flask(__name__)


@app.route('/')
def getRiskSchedule(userData):
    # Add code to run data through model
    date = runTriage()
    return { 'date': date }


def schedule(risk_level):
  # return day as string
  return '2021-01-22'


def runTriage():
    db = firebase.database()
    users = db.child('/users').get().val()
    timestamp_by_id = { id: users[id]['timestamp'] for id in users }
    most_recent = max(timestamp_by_id, key=timestamp_by_id.get)
    
    # Run through model here

    result = 0.7
    date = schedule(result)

    # Push date result back to db
    db.child('/users').child(most_recent).update({"schedule":date})

    return date


if __name__ == '__main__':
    app.run(debug=True)