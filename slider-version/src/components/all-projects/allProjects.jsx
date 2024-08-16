import React from 'react';
import ProjectData from '@/assets/jsonData/projects/ProjectData.json';
import SingleProject from './SingleProject';
import Link from 'next/link';

const AllProjects = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="row align-center">
                    <div className="col-lg-1 info">
                        <h2 className="curbe-title">
                            <Link href="/">Ana Sayfa</Link>
                        </h2>
                    </div>
                    
                    <div className="col-lg-10 offset-lg-1 thumb">
                        <div id="portfolio-grid" className="gallery-items colums-3">
                            {ProjectData.map(portfolio =>
                                <SingleProject portfolio={portfolio} key={portfolio.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
