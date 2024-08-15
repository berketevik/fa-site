import AllProjects from '@/components/all-projects/allProjects';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <LayoutStyle1>
                <AllProjects />
            </LayoutStyle1>
        </>
    );
};

export default NotFoundPage;