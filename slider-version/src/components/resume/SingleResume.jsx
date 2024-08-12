import React from 'react';

const SingleResume = ({ resume }) => {
    const { title, subTitle, text, timeSpan } = resume

    return (
        <>
            <li>
                <h4>{title}</h4>
                <h5>{subTitle}</h5>
                <span>{timeSpan}</span>
                <p>{text}</p>
            </li>
        </>
    );
};

export default SingleResume;