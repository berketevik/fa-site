import React from 'react';
import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="contact-content">
                    <div className="row align-center">
                        <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                            <div className="form-box mt-50">
                                <h2>{`Let's talk?`}</h2>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;