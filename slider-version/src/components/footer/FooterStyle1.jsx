import React from 'react';
import SocialShareStyle2 from '../utilities/SocialShareStyle2';

const FooterStyle1 = () => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="footer-social">
                                <SocialShareStyle2 />
                            </ul>
                        </div>
                        <div className="col-lg-6 text-end">
                            <p>&copy; {(new Date().getFullYear())} Ambrox. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;