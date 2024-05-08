# CROPIGO: AI Assistant for Farmers

---

## Table of Contents:

- [CROPIGO: AI Assistant for Farmers](#cropigo-ai-assistant-for-farmers)
  - [Table of Contents:](#table-of-contents)
  - [Introduction:](#introduction)
  - [Modules:](#modules)
    - [a. Crop Recommendation System:](#a-crop-recommendation-system)
    - [b. Plant Disease Classification:](#b-plant-disease-classification)
  - [Technology Stack:](#technology-stack)
    - [a. Mobile Application:](#a-mobile-application)
    - [b. Backend:](#b-backend)
    - [c. Website:](#c-website)
  - [Setup Instructions:](#setup-instructions)
    - [a. Server Setup:](#a-server-setup)
    - [b. Android Setup:](#b-android-setup)
  - [Usage Instructions:](#usage-instructions)
    - [a. Crop Recommendation System:](#a-crop-recommendation-system-1)
    - [b. Plant Disease Classification:](#b-plant-disease-classification-1)
  - [Conclusion:](#conclusion)
  - [References:](#references)

---

## Introduction:

CROPIGO is an AI-powered assistant tailored specifically for farmers, aiming to optimize crop selection and disease identification processes. By leveraging machine learning models and modern technologies, CROPIGO assists farmers in making data-driven decisions, ultimately improving agricultural yield and efficiency.

## Modules:

### a. Crop Recommendation System:

The Crop Recommendation System assists farmers in selecting the most suitable crops based on various factors such as soil composition, weather conditions, and geographical location. By providing inputs such as Nitrogen (N), Phosphorous (P), Potassium (K) ratios in the soil, pH value, rainfall, and location (Indian city), farmers receive recommendations tailored to their specific conditions. This recommendation is generated using an XGBoost model trained on relevant agricultural data.

### b. Plant Disease Classification:

The Plant Disease Classification module aids farmers in identifying diseases affecting their crops by analyzing images of plant leaves. Farmers can capture images using their device camera or select images from the gallery. The application then processes these images using a TensorFlow Lite model to identify the disease accurately.

## Technology Stack:

### a. Mobile Application:

- Framework: React Native
- Dependencies: 
    - react-native-responsive-dimensions
    - react-native-image-picker
    - @react-native-async-storage/async-storage
    - @react-native-community/netinfo
    - react-native-toast-message
    - TensorFlow Lite (integrated using native modules)

### b. Backend:

- Framework: FastAPI

### c. Website:

- Framework: Next.js

## Setup Instructions:

### a. Server Setup:

1. Create a virtual environment and activate it.
2. Install dependencies from the `backend/requirement.txt` file using pip.
3. Navigate to the backend folder and create a file named `.env` containing the API_KEY for the OpenWeather API.
4. Run the server using the command: `uvicorn project:app --host <IPv6 Address> --port 8000 --reload`.

### b. Android Setup:

1. Navigate to the `cropiGo_ml/android` folder and add the TensorFlow Lite model (renamed to `converted_model.tflite`).
2. Update the `BASE_URL` in the `src/context/Constant.js` file to match the server's IPv6 Address.
3. Navigate to the `cropiGo_ml` folder and install dependencies using `npm i`.
4. Run the Android application using `npx react-native run-android`.

## Usage Instructions:

### a. Crop Recommendation System:

- Launch the CROPIGO mobile application.
- Enter the required parameters including N, P, K ratios, pH value, rainfall, and location.
- Submit the data to receive crop recommendations based on the provided inputs.

### b. Plant Disease Classification:

- Open the CROPIGO mobile application.
- Capture an image of the plant leaf using the device camera or select an image from the gallery.
- The application will process the image and provide information about any diseases detected on the plant leaves.

## Conclusion:

CROPIGO revolutionizes farming practices by empowering farmers with advanced AI assistance. By integrating cutting-edge technologies, CROPIGO streamlines crop selection and disease identification processes, thereby contributing to improved agricultural productivity and sustainability.

## References:

- List any external resources, libraries, or datasets used in the development of CROPIGO.
