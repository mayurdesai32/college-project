
from pydantic import BaseModel
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from cropRecommend import Crop



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
    return {'message': "Hello world"}

Temperature=44
Humidity=66

@app.post('/v2/api/crop') 
async def crop(crop: CropSchema):

    # print(crop.dict())  
    #get temp ,humidity from weather api
    data=Crop(crop.Nitrogen, crop.Phosphorus, crop.Potassium,Temperature,Humidity,crop.phValue, crop.Rainfall)
    output=data.Recommend()
   
    print('Predicted value from XGBoost is:', output)
    return JSONResponse(content={'message': output})





@app.post("/v2/api/plant/upload/")
async def plant_image(file: UploadFile):

    if not file.filename.lower().endswith((".jpg", ".jpeg", ".png", ".gif")):
        return JSONResponse(content={"error": "Only image files are allowed."}, status_code=400)


    with open(file.filename, "wb") as image_file:
        image_file.write(file.file.read())


    return JSONResponse(content={"message": "Image uploaded successfully."})





