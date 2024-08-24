import React from 'react';
import Image from 'next/image';
import SocialShare from '../utilities/SocialShare';
import fs from 'fs';
import path from 'path';
import Slider from '../widgets/Slider'
const PortfolioSingleContent = ({ projectContent }) => {
    const { id, title, yer, tip, grup, isveren, ofis, baslangic, bitis, sure, alan } = projectContent
    const imagesDir = path.join(process.cwd(), `public/FaMimarlikProjeler/${id}`);
    let imagePaths = [];

    try {
        const files = fs.readdirSync(imagesDir);
        imagePaths = files
            .filter(file => file.endsWith('.jpg'))
            .map(file => `/assets/fa_mimarlik/${id}/${file}`);
    } catch (error) {
        console.error('Error reading directory:', error);
    }
    return (
        <>
            <div className="project-details-area default-padding">
                <div className="container">
                    <div className="project-details-items">
                        <div className="project-thumb">
                            {/* <Slider images={imagePaths} /> */}
                        </div>

                        <div className="top-info">
                            <div className="row">
                                <div className="col-xl-12 left-info">
                                    <div className="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div className="content">
                                            <ul className="project-basic-info">
                                                <li>
                                                    {title}
                                                </li>
                                                
                                                <li>
                                                    {yer}
                                                </li>
                                                <li>
                                                    {tip}
                                                </li>
                                                <li>
                                                    {grup}
                                                </li>

                                                <li>
                                                    {isveren}
                                                </li>
                                                <li>
                                                    {ofis}
                                                </li>
                                                <li>
                                                    {baslangic}
                                                </li>
                                                <li>{bitis}</li>
                                                <li>{sure}</li>
                                                <li>{alan}</li>


                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioSingleContent;