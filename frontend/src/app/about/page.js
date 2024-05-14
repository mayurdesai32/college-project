import React from "react";

const page = () => {
  return (
    <div
      className="page  bgSec"
      style={{ paddingTop: "100px", paddingBottom: "40px" }}
    >
      <div className="container">
        <h1>Created By Mayur Desai</h1>
        <div className="section">
          <div className="about_title">Introduction: </div>
          <div className="about_subtitle">
            CROPIGO is an AI-powered assistant tailored specifically for
            farmers, aiming to optimize crop selection and disease
            identification processes. By leveraging machine learning models and
            modern technologies, CROPIGO assists farmers in making data-driven
            decisions, ultimately improving agricultural yield and efficiency.
          </div>
          <div className="about_title">
            Modules: a. Crop Recommendation System:
          </div>
          <div className="about_subtitle">
            The Crop Recommendation System assists farmers in selecting the most
            suitable crops based on various factors such as soil composition,
            weather conditions, and geographical location. By providing inputs
            such as Nitrogen (N), Phosphorous (P), Potassium (K) ratios in the
            soil, pH value, rainfall, and location (Indian city) and location
            (city, state) from the OpenWeather API. The API returns temperature
            and humidity data based on the provided location.farmers receive
            recommendations tailored to their specific conditions. This
            recommendation is generated using an XGBoost model trained on
            relevant agricultural data.
          </div>
          <div className="about_title">
            Modules: b. Plant Disease Classification:
          </div>
          <div className="about_subtitle">
            The Plant Disease Classification module aids farmers in identifying
            diseases affecting their crops by analyzing images of plant leaves.
            Farmers can capture images using their device camera or select
            images from the gallery. The application then processes these images
            using a TensorFlow Lite model to identify the disease accurately.
          </div>
        </div>
        <div className="section">
          <div className="about_title"> Crop Recommendation System: </div>
          <div className="about_subtitle">
            In this module, we use a Kaggle dataset containing seven parameters:
            <ul>
              <li>N: Nitrogen content in soil</li>
              <li>P: Phosphorous content in soil</li>
              <li>K: Potassium content in soil</li>
              <li>Temperature: Celsius</li>
              <li>Humidity: %</li>
              <li>pH: Soil pH value</li>
              <li>Rainfall: mm</li>
            </ul>
            Data preprocessing involves:
            <ul>
              <li>
                Checking for unwanted columns and removing them if present.
              </li>
              <li>Identifying and removing duplicate rows.</li>
              <li>
                Handling null values by replacing them with the mean value of
                the respective column.
              </li>
            </ul>
            We train multiple machine learning models including KNN, SVM, Random
            Forest, Decision Tree, XGBoost, and Logistic Regression. The model
            that outperforms the others is selected for use in the application.
            <div className="about_title"> Plant Disease Classification: </div>
            <div className="about_subtitle">
              In this module, we utilize the Plant Village dataset, which
              includes 14 crop types and 24 disease types. We employ deep
              learning transfer learning with EfficientNetB3.
              <div>Data preprocessing includes:</div>
              <ul>
                <li>
                  Verifying if images are corrupted and deleting them if
                  necessary.
                </li>
                <li>Resizing images to 225x225 pixels.</li>
                <li>
                  Splitting the dataset into training, testing, and validation
                  sets in a 70:15:15 ratio.
                </li>
                <li>
                  Applying data augmentation techniques like horizontal
                  flipping, label encoding, and normalization (scaling pixel
                  values to [0,1]) on the training dataset.
                </li>
              </ul>
              Users upload images of plant leaves, which are then input into the
              trained model. The model outputs the crop type and whether the
              plant is healthy or diseased. If diseased, the system provides
              recommendations for treatment
            </div>
          </div>
        </div>
        <div className="section">
          <div className="about_title">Application</div>
          <ul>
            <li>for website Both the model are deployed on server </li>
            <li>
              for Mobile Application only Crop Recommendation require server as
              i am unable integrate xgboost model directly inside model
            </li>
            <li>
              I've added some addition feature in Mobile Application eg storing
              Result
            </li>
            <li></li>
          </ul>
        </div>
        <div className="section">
          <div className="about_title">Technology Stack:</div>
          <div className="about_subtitle">
            <div className="Tech"> FrontEnd Website</div>
            <ul>
              <li>Framework: Next.js</li>
              <li>CSS</li>
            </ul>

            <div className="Tech"> Mobile Application </div>

            <ul>
              <li></li>
              <li>react-native-responsive-dimensions</li>
              <li>react-native-image-picker</li>
              <li> @react-native-async-storage/async-storage</li>
              <li> @react-native-community/netinfo</li>
              <li> react-native-toast-message</li>
              <li>TensorFlow Lite (integrated using native modules)</li>
              <li></li>
            </ul>
            <div className="Tech"> BackEnd Server website </div>
            <ul>
              <li>fastapi</li>
              <li>uvicorn</li>
              <li>numpy</li>
              <li>xgboost</li>
              <li>scikit-learn</li>
              <li>tensorflow-cpu</li>
              <li>python-multipart</li>
              <li>pillow</li>
              <li>python-dotenv</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
