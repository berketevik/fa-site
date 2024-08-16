"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={handlePrev}>‹</button>
            <div className="slider-image">
                <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} width={1175} height={515} />
            </div>
            <button className="slider-button next" onClick={handleNext}>›</button>

            <style jsx>{`
                .slider {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                .slider-image {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .slider-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    border: none;
                    padding: 10px;
                    cursor: pointer;
                }
                .prev {
                    left: 10px;
                }
                .next {
                    right: 10px;
                }
            `}</style>
        </div>
    );
};

export default Slider;
