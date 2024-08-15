import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SinglePortfolio = ({ portfolio }) => {
    const { id, title, thumb, subTitle, arrowIcon } = portfolio

    return (
            <div className="pf-item">
                <div className="overlay-content">
                    <Image src={`/assets/img/portfolio/${thumb}`} alt="thumb" width={160} height={200} />
                    <div className="content">
                        <div className="title">
                            <span>{subTitle}</span>
                            <h5><Link href={`/project/${id}`}>{title}</Link></h5>
                        </div>
                        <Link href={`/project/${id}`}><i className={arrowIcon}></i></Link>
                    </div>
                </div>
            </div>
    );
};

export default SinglePortfolio;