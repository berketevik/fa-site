import React from 'react';
import ResumeData from '@/assets/jsonData/resume/ResumeData.json'
import SingleResume from './SingleResume';

const Resume = () => {
    return (
            <div className="container">
                <div className="content">
                    <div className="row align-center">
                        <div className="col-lg-1 info">
                            <h2 className="curbe-title">Hakkımızda</h2>
                        </div>
                        <div className="col-lg-10 offset-lg-1 thumb">
                            <ul className="education-table">
                                {ResumeData.map(resume =>
                                    <SingleResume resume={resume} key={resume.id} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Resume;