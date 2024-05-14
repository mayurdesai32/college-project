import React from 'react'
import Image from "next/image";
const LandingPage = () => {
    return (
        <div className="LandingPage container">
            <div className="homeContent">
                <h1>
                    Advance your <br />
                    <span> crop cultivation </span>
                    <br />
                    techniques.
                </h1>
                <p id="detail">
                    Cropigo is a tool that provides guidance on the critical elements of
                    your farming methods.
                </p>
                <button>Download App</button>
            </div>
            <div className="homeImg">
                <Image
                    src={"/hero.png"}
                    alt="Picture of the author"
                    width={600}
                    height={500}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
            </div>
        </div>
    )
}

export default LandingPage