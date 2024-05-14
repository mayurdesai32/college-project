import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="page cropPage" style={{ paddingBottom: "40px" }}>
      <div className="container">
        <div
          className="flex_2"
          style={{
            paddingTop: "100px",
          }}
        >
          <div className="col2 alignCenter">
            <div className="crop_title">
              Find out the most suitable crop to grow in your farm
            </div>
            <Image
              src={"/Frame.png"}
              alt="Picture of the author"
              width={450}
              height={500}
              style={{ width: "450px", height: "600px" }}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="col2" style={{ width: "100%" }}>
            {/* <div className="crop_form"> */}
            <div className="inputText">
              <label htmlFor="">Nitrogen</label>
              <input type="text" placeholder="Enter the value(Example:50)" />
            </div>
            <div className="inputText">
              <label htmlFor="">Phosphorus</label>
              <input
                type="text"
                placeholder="Enter the value(Example:50)"
                style={{ margin: "0%" }}
              />
            </div>
            <div className="inputText">
              <label htmlFor="">Ph Value</label>
              <input type="text" placeholder="Enter the value(Example:50)" />
            </div>
            <div className="inputText">
              <label htmlFor="">Rainfall( in mm )</label>
              <input type="text" placeholder="Enter the value(Example:50)" />
            </div>
            <div className="inputText">
              <label htmlFor="">Select State</label>
              <input type="text" placeholder="Enter the value(Example:50)" />
            </div>
            <div className="inputText">
              <label htmlFor="">Select City</label>
              <input type="text" placeholder="Enter the value(Example:50)" />
            </div>
            <button className="cropBtn">Submit</button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
