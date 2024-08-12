"use client"
import React from 'react';
import { ReactTyped } from 'react-typed';
import shape7 from '@/assets/img/shape/7.png'
import Image from 'next/image';
import illustration3 from '@/assets/img/illustration/logo-iconold.png'

const BannerSlides = () => {

    const textLines = []

    return (
        <div className="container">
            <div className="content" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image src={illustration3} alt="Thumb" width={603} height={612} />
                <Image style={{position:'absolute',zIndex:'-1'}} src={shape7} alt="Thumb" className='imgFilter'/>

                {/* <div className="thumb align-center">
                            <Image src={illustration3} alt="Thumb" width={603} height={612}  />
                            <div className="shape-center">
                            </div>
                        </div> */}
            </div>
        </div>
    );
};

export default BannerSlides;