"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";

import Resume from '@/components/resume/Resume';
import Blog from '@/components/blog/Blog';
import Contact from '@/components/contact/Contact';
import React from 'react';
import Portfolio from '@/components/portfolio/Portfolio';
import Skills from '@/components/skills/Skills';
import BannerSlides from '@/components/banner/BannerSlides';
import HeaderStyle1 from "@/components/header/HeaderStyle1";

const Home = () => {
    return (
            <div className="wrapper">
                <HeaderStyle1 />
                <div className='banner-area banner-style-one banner-three double-items navigation-between-bottom navigation-right-botom navigation-custom-large overflow-hidden top-pad-80 text-light'>
                    <Swiper
                        speed={1400}
                        direction="horizontal"
                        mousewheel={true}
                        autoplay={false}
                        modules={[Pagination, Mousewheel, Navigation]}
                        loop={true}
                        pagination={{
                            type: "fraction"
                        }}
                        navigation={true}
                        className="banner-slide-counter"
                    >
                        <SwiperSlide className="bg-cover" style={{  backgroundColor: '#ffffff' }}> <BannerSlides /> </SwiperSlide>
                        <SwiperSlide className="bg-cover" style={{  backgroundColor: '#ffffff' }}> <Portfolio /> </SwiperSlide>
                        <SwiperSlide className="bg-cover" style={{  backgroundColor: '#ffffff' }}> <Resume /> </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    );
};

export default Home;
