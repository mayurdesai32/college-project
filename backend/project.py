
from pydantic import BaseModel
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from cropRecommend import Crop
from predection import Plant
# import numpy as np
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

# Temperature=44
# Humidity=66

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
    return JSONResponse(content={'message': "error "})



# # 1st

# # Load the TensorFlow Lite model
# interpreter = tf.lite.Interpreter(model_path="your_model.tflite")
# interpreter.allocate_tensors()

# # Get input and output tensors
# input_details = interpreter.get_input_details()
# output_details = interpreter.get_output_details()

# # Define labels
# labels = ["class1", "class2", "class3"]  # Replace with your own labels


# def preprocess_image(image):
#     # Preprocess the image
#     img = image.convert("RGB").resize((224, 224))
#     img = np.array(img) / 255.0
#     img = img[np.newaxis, :, :, :].astype('float32')
#     return img








@app.post("/v2/api/plant/upload/")
async def plant_image(file: UploadFile):
    print("hello world")

    if not file.filename.lower().endswith((".jpg", ".jpeg", ".png", ".gif")):
        return JSONResponse(content={"error": "Only image files are allowed."}, status_code=400)


    # with open(file.filename, "wb") as image_file:
    #     image_file.write(file.file.read())

    contents = await file.read()

    plant= Plant(contents)
    reult= plant.predict_plant()
    print("prediction", reult['prediction'])
    return JSONResponse(content={ "hello":'prediction'})

# 2nd

#   contents = await file.read()
#     image = Image.open(BytesIO(contents))

#     # Preprocess image
#     input_data = preprocess_image(image)

#     # Set input tensor
#     interpreter.set_tensor(input_details[0]['index'], input_data)

#     # Run inference
#     interpreter.invoke()

#     # Get output
#     output_data = interpreter.get_tensor(output_details[0]['index'])
#     prediction = np.argmax(output_data)

#     return {"prediction": labels[prediction]}











#     return JSONResponse(content={"message": "Image uploaded successfully."})





