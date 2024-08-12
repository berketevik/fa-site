import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleSkill = ({ skill }) => {
    const { id, title, icon, text } = skill

    return (
        <>
            <div className="service-style-one col-lg-4 col-md-6">
                <div className="service-style-one-item">
                    <Image src={`/assets/img/icon/${icon}`} alt="Icon" width={78} height={80} />
                    <h4><Link href={`/service-single/${id}`}>{title}</Link></h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleSkill;