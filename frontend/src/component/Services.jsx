import React from 'react'
import Title from './Title'
import Image from 'next/image'


const Services = () => {
    return (
        <div className='' style={{ minHeight: "80vh", paddingBottom: "100px" }}>

            <Title title={" Our Services"} subTitle={"We assist you with these services so that you can raise the calibre of your farming."} />

            <div className='serviceContainer'>
                <SingleService img={"/crop.png"} title={"Crop Recommendation"} detail={"This tool aids in choosing the ideal crop for your particular soil type."} />
                <SingleService img={"/plant.png"} title={"Plant Disese"} detail={"With the use of an uploaded photo, this tool assists in identifying the plant's disease."} />
            </div>
        </div>

    )
}


const SingleService = ({ img, title, detail }) => {
    return (
        <>
            <div id="SingleService_flex">
                <div className='SingleService_col1'>
                    <Image
                        src={img}
                        alt="Picture of the author"
                        width={70}
                        height={80}
                    />
                </div>
                <div className='SingleService_col2'>
                    <div className='SingleService_title'>{title}</div>
                    {/* <div style={{ width: "80%", backgroundColor: 'red', height: "2px" }}></div> */}
                    <div className='SingleService_subtitle'>{detail}</div>

                </div>


            </div>


        </>

    )
}






export default Services