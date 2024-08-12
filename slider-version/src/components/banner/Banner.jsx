"use client"
import React from 'react';
import { ReactTyped } from 'react-typed';
import shape4 from '@/assets/img/shape/4.png'
import shape7 from '@/assets/img/shape/7.png'
import Image from 'next/image';
import Link from 'next/link';
import illustration1 from '@/assets/img/illustration/1.png'
import SocialShare from '../utilities/SocialShare';

const Banner = () => {

    const textLines = [
        '<b className="">Web Developer</b>',
        '<b className="">Professional Coder</b>',
        '<b className="">UI/UX Designer</b>'
    ]

    return (
            <div className="auto-height bg-fixed banner-style-one" id='home'>
                <div className="container">
                    <div className="double-items">
                        <div className="row align-center">
                            <div className="col-lg-6 info">
                                <h1 className="text-invisible">WELCOME</h1>
                                <h2>Hey <Image src={shape4} alt="Icon" /> {`I'm`} <span>Easton</span></h2>
                                <h3 className="title">
                                    <span className="header-caption" id="page-top">
                                        <ReactTyped
                                            strings={textLines} typeSpeed={35} backSpeed={35} backDelay={2000} loop>
                                        </ReactTyped>
                                    </span>
                                </h3>
                                <div className="button mt-55">
                                    <Link className="btn btn-md circle btn-dark" href="/resume">My Resume</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 thumb" data-wow-delay="900ms">
                                <Image className="wow fadeInDown" src={illustration1} alt="Thumb" />
                                <div className="shape-center">
                                    <Image src={shape7} alt="Thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="personal-social">
                            <ul>
                                <SocialShare />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;