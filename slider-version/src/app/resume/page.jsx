import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import ResumePageContent from '@/components/resume/ResumePageContent';
import React from 'react';

export const metadata = {
    title: "Ambrox - Personal Portfolio - Resume"
}

const ResumePage = () => {
    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="resume" title="Resume" />
                <ResumePageContent/>
            </LayoutStyle1>
        </>
    );
};

export default ResumePage;