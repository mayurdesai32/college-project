import React from 'react'
import Title from './Title'

const ContactUs = () => {
    return (
        <div className='ContactUs '>
            <div className="container">
                <Title title={"How Can We Help You"} />
                <div className="contact">
                    <div className="contact_flex">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="contact_flex">
                        <input type="text" placeholder='Phone' />
                        <input type="text" placeholder='Organization' />
                    </div>

                    <div className="contact_flex">
                        <textarea type="text" placeholder='Message' />

                    </div>
                    <button className='contact_btn'>Submit</button>
                </div>

            </div>

        </div>
    )
}

export default ContactUs