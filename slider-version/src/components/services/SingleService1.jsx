import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleService1 = ({ service }) => {
    const {title, icon, text } = service

    return (
        <>
            <div className="service-style-one col-lg-4 col-md-6">
                <div className="service-style-one-item">
                    <Image src={`/assets/img/icon/${icon}`} alt="Icon" width={78} height={80} />
                    <h4><Link href="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">{title}</Link></h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleService1;