import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="page bgSec">
      <div className="container">
        <div className="flex_2" style={{ minHeight: "90vh" }}>
          <div
            className="col2 "
            style={{
              fontSize: "2.9rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            To check for the disease for your crop, upload a photo of it.
          </div>
          <div className="col2">
            <div className="imageContainer ">
              <Image
                src={"/file-regular.svg"}
                alt="Picture of the author"
                width={450}
                height={500}
                style={{ width: "250px", height: "150px" }}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <button> upload image</button>
              <div>or drop a file</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
