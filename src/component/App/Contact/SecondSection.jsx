import React from 'react';
import contactpattern from '../../Assest/Image/contact-pattern.png';
export const SecondSection = () => {
    return (
        <div className="cnt-second-section">
            <div className="cnt-second-section-left">
                <h1>We’d love
                    to hear
                    from you.</h1>
                    <span>  <img src={contactpattern} alt="" /></span>
            </div>
            <div className="cnt-second-section-right">
                <form className='cnt-second-section-right-form'>
                    <div className="cnt-second-section-right-form-group">
                        {/* <label htmlFor="name">Name <span>*</span></label> */}
                        <input type="text" id="name" placeholder='Name*' />
                    </div>
                    <div className="cnt-second-section-right-form-group">
                        {/* <label htmlFor="email">Email<span>*</span></label> */}
                        <input type="email" id="email" placeholder='Email*' />
                    </div>
                    <div className="cnt-second-section-right-form-group">
                        {/* <label htmlFor="message">Message</label> */}
                        <input type="text" id="message" placeholder='Message' />

                        {/* <textarea id="message" placeholder='Message' /> */}
                    </div>
                    <div className="cnt-second-section-right-form-group">
                        <button type="submit">Submit &rarr;</button>
                    </div>
                </form>
            </div>
        </div>

    )
}