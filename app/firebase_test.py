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

def runTriage():
    db = firebase.database()
    x = db.child('/users').get().val()
    print(x)

if __name__=='__main__':
    runTriage()