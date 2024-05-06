from typing import List
import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO
 
class Plant():

    def __init__(self, contents):
        self.contents = contents

        # Load the TensorFlow Lite model
        self.interpreter = tf.lite.Interpreter(model_path="plant_tf_lite_model.tflite")
        self.interpreter.allocate_tensors()

        # Get input and output tensors
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()

    def preprocess_image(self, image):
        # Preprocess the image
        img = image.convert("RGB").resize((256, 256))
        img = np.array(img) / 255.0
        img = img[np.newaxis, :, :, :].astype('float32')
        return img

    def predict_plant(self):
        # contents = await file.read()
      
        image = Image.open(BytesIO(self.contents))

        # Preprocess image
        self.input_data = self.preprocess_image(image)

        # Set input tensor
        self.interpreter.set_tensor(self.input_details[0]['index'], self.input_data)

        # Run inference
        self.interpreter.invoke()

        # Get output
        output_data = self.interpreter.get_tensor(self.output_details[0]['index'])
        prediction = np.argmax(output_data)
        prediction = np.max(output_data)
        print(output_data)
        print("prediction", prediction)
        return {"prediction": prediction}
