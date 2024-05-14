import React from 'react'
import Title from './Title'
import Image from "next/image";
const Aboutus = () => {
    return (
        <div className='aboutus' style={{ minHeight: "100vh" }}>

            <div className='container' style={{ paddingBottom: "50px" }}>
                <Title title={"About Us"} />
                .
                <div className="flex_2">
                    <div className="col1">
                        <Image
                            src={"/about.png"}
                            alt="about of the author"
                            width={600}
                            height={500}
                        />
                    </div>

                    <div className="col2">
                        <p className="about_detail">
                            Crop cultivation has been revolutionized by the use of advanced technologies. These technologies have allowed farmers to improve yields, reduce waste, and increase overall efficiency. Some of the
                            key technologies used in crop cultivation include:
                        </p>
                        <p className="about_detail">
                            <span className="about_detail_title"> Precision agriculture:</span> This involves the use of GPS and other technologies to precisely map and monitor crops, allowing farmers to apply resources such as fertilizers and pesticides more efficiently
                        </p>

                        <p className="about_detail">
                            <span className="about_detail_title"> Artificial intelligence:</span> AI algorithms are used to analyze vast amounts of data, such as weather patterns and soil conditions, to optimize crop yields.
                        </p>
                        <p className="about_detail">With help of these tecnologies we help farmers to improve the overall
                            quality and quantity of crops produced, reducing waste and increasing sustainability.</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Aboutus