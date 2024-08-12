import React from 'react';
import HeaderStyle2 from '../header/HeaderStyle2';
import FooterStyle1 from '../footer/FooterStyle1';

const LayoutStyle1 = ({ children }) => {
    return (
        <>
            <HeaderStyle2 />
            {children}
            <FooterStyle1 />
        </>
    );
};

export default LayoutStyle1;