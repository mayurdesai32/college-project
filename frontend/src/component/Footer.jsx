import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <div className='FooterContainer'>
                <div className="footer_title">Cropigo</div>
                <div className="footer_middle">Project by Mayur Desai | All Rights Reserved @ 2024</div>
                <div className="footer_last">


                    <a href="https://linkedin.com/in/mayurdesai88" target="blank">

                        <Image
                            src={"/linkedin-in.svg"}
                            alt="Picture of the author"
                            width={20}
                            height={20}
                        />

                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/mayurdesai32" target="blank">
                        <Image
                            src={"/github.svg"}
                            alt="Picture of the author"
                            width={20}
                            height={20}
                        />
                    </a>


                    <a href="https://wa.me/9372191971" target="blank">

                        <Image
                            src={"/whatsapp.svg"}
                            alt="Picture of the author"
                            width={20}
                            height={20}
                        />

                    </a>
                    <a href="https://mayurdesai.vercel.app/" target="blank">

                        <Image
                            src={"/link-solid.svg"}
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            style={{ color: 'white', }}
                        />

                    </a>
                    {/* <i className="fa-brands fa-kaggle"></i> */}


                </div>
            </div>
        </div>
    )
}

export default Footer