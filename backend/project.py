
from pydantic import BaseModel
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from cropRecommend import Crop

from OpenWeather import OpenWeather

class CropSchema(BaseModel):
    Nitrogen: float
    Phosphorus: float
    Potassium: float 
    phValue: float
    Rainfall: float
    city: str

app = FastAPI()

# Define the allowed origins (replace '*' with the specific origin you want to allow)
origins = ["*"]

# Add CORS middleware to your FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


 

@app.get('/')
async def first_app():
    print("hello world")
    return {'message': "Hello world"}

@app.post('/v2/api/crop') 
async def crop(crop: CropSchema):

    print(crop.dict())   
    #get temp ,humidity from weather api
    weather=OpenWeather(crop.city).fetch_weather_data()
    if(weather) :
       
        Temperature=weather["main"]['temp']
        Humidity=weather["main"]['humidity']

        data=Crop(crop.Nitrogen, crop.Phosphorus, crop.Potassium,Temperature,Humidity,crop.phValue, crop.Rainfall)
        output=data.Recommend()
   
        print('Predicted value from XGBoost is:', output)
        return JSONResponse(content={'message': output,"Temperature":Temperature,"Humidity":Humidity})
    # return JSONResponse(content={'message': "error "})
    print("error while fetching Temperature and Humidity")
    raise HTTPException(status_code=404, detail="error while fetching Temperature and Humidity")


















