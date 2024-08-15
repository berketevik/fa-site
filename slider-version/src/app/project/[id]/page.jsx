import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import PortfolioSingleContent from '@/components/portfolio/PortfolioSingleContent';
import ProjectDetailData from '@/assets/jsonData/projectdetail/ProjectDetailData.json';
import React from 'react';

export const metadata = {
    title: "Fa Mimarlık - Projeler"
}

const PortfolioSingle = ({ params }) => {
    const { id } = params
    const data = ProjectDetailData.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutStyle1>
                <PortfolioSingleContent projectContent={data} />

            </LayoutStyle1>
        </>
    );
};

export default PortfolioSingle;