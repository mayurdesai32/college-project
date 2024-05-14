const page = () => {
  return (
    <div className="page-container">
      <h1>Created By Mayur Desai</h1>
      <div className="section">
        <div className="about-title">Introduction:</div>
        <div className="about-subtitle">
          CROPIGO is an AI-powered assistant tailored specifically for farmers,
          aiming to optimize crop selection and disease identification
          processes. By leveraging machine learning models and modern
          technologies, CROPIGO assists farmers in making data-driven decisions,
          ultimately improving agricultural yield and efficiency.
        </div>
      </div>
      <div className="section">
        <div className="about-title">Modules:</div>
        <div className="about-subtitle">
          <div>
            <span>a. Crop Recommendation System:</span>
            <ul>
              <li>
                The Crop Recommendation System assists farmers in selecting the
                most suitable crops based on various factors such as soil
                composition, weather conditions, and geographical location.
              </li>
              <li>
                We train multiple machine learning models including KNN, SVM,
                Random Forest, Decision Tree, XGBoost, and Logistic Regression.
                The model that outperforms the others is selected for use in the
                application.
              </li>
            </ul>
          </div>
          <div>
            <span>b. Plant Disease Classification:</span>
            <ul>
              <li>
                The Plant Disease Classification module aids farmers in
                identifying diseases affecting their crops by analyzing images
                of plant leaves.
              </li>
              <li>
                Users upload images of plant leaves, which are then input into
                the trained model. The model outputs the crop type and whether
                the plant is healthy or diseased. If diseased, the system
                provides recommendations for treatment.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="about-title">Technology Stack:</div>
        <div className="about-subtitle">
          <h5>FrontEnd Website</h5>
          <ul>
            <li>Framework: Next.js</li>
            <li>CSS</li>
          </ul>

          <h5>BackEnd Server website</h5>
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
  );
};

export default page;
