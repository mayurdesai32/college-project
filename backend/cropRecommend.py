import numpy as np
import pickle


class Crop:
 def __init__(self,  Nitrogen,Phosphorus,Potassium,Temperature,Humidity, phValue,Rainfall):
  self.Nitrogen=Nitrogen
  self.Phosphorus=Phosphorus
  self.Potassium=Potassium
  self.Temperature=Temperature
  self.Humidity=Humidity
  self.phValue=phValue
  self.Rainfall=Rainfall

 def loadModel(name):
    with open(name, "rb") as model_file:
        return pickle.load(model_file)
 
  
 XB = loadModel('./model/XGBoostCR.pkl')
 label_encoder = loadModel('./model/labelEncoderCR.pkl')

 # data1 = np.array([[61, 41, 17, 25.1420613, 65.26185, 6.0219, 76.68]])

# npk tem humidity phValue rainfall


 def Recommend(self):
  data1 = np.array([[self.Nitrogen, self.Phosphorus, self.Potassium,self.Temperature,  self.Humidity,self.phValue, self.Rainfall]])
# Reshape data1 to be a 2D array
  print(data1)
  data1 = data1.reshape(1, -1)
  predictionXB = self.XB.predict(data1)
  return self.label_encoder.inverse_transform(predictionXB)[0]

   

  # print('Predicted value from XGBoost is:', predicted_labels)

