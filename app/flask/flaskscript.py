from flask import Flask
from firebase import Firebase
from config import config
from nn import loadModel
import pandas as pd
import datetime

NN_model = None
firebase = Firebase(config)
app = Flask(__name__)

@app.before_first_request
def model():
    NN_model = loadModel()

@app.route('/')
def getRiskSchedule():
  print(config)
  # Add code to run data through model
  date = runTriage()
  return date


def schedule(risk_level):
  today = datetime.date.today
  if risk_level > 0.75:
    return today
  elif risk_level > 0.5:
    return today + datetime.timedelta(days = 1) 
  elif risk_level > 0.25:
    return today + datetime.timedelta(days = 2)
  else:
    return today + datetime.timedelta(days = 3)


def runTriage():
    db = firebase.database()
    users = db.child('/users').get().val()

    for id in users:
      if 'schedule' in users[id] and users[id]['schedule'] == '0':
        # Run through model here
        userdata = users[id]
        predictions = NN_model.predict()
        data = pd.DataFrame([], columns = ['age', 'sex', 'chronic_disease_binary'])
        data['age'][1] = userdata['age']
        data['sex'][1] = 1 if userdata['sex'] == 'Male' else 0
        data['chronic_disease_binary'][1] = 0 if not userdata['chronic_disease_binary'] else 1
        height = userdata['height']
        weight = userdata['weight']

        BMI = (weight * 0.453592) / (height * 0.0254) ** 2
        predictions[0][0] = predictions[0][0] * BMI / 25

        result = predictions[0][0]
        pritn(result)
        date = schedule(result)
        db.child('/users').child(id).update({"schedule":date})

    return 'Flask Server Running'


if __name__ == '__main__':
    app.run(debug=True)