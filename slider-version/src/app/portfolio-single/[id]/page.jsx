import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import PortfolioSingleContent from '@/components/portfolio/PortfolioSingleContent';
import React from 'react';

export const metadata = {
    title: "Ambrox - Personal Portfolio - Portfolio Single"
}

const PortfolioSingle = () => {
    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="portfolio-single" title="Portfolio Single" />
                <PortfolioSingleContent />
            </LayoutStyle1>
        </>
    );
};

export default PortfolioSingle;