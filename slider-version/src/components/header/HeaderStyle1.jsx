"use client";
import React from 'react';
import Image from 'next/image';
import logoIcon from '@/assets/img/logo-icon.png';
import logosiyah from '@/assets/img/deneme.png';
import logosiyahv1 from '@/assets/img/meto.png';
import Link from 'next/link';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import { toast } from 'react-toastify';
import SocialShare from '../utilities/SocialShare';

const HeaderStyle1 = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Subscribe!")
    }

    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();

    return (
        <header>
            <nav
                className={`navbar navbar-icon-menu mobile-sidenav attr-border navbar-sticky navbar-default validnavs navbar-fixed white no-background on no-full ${isInfoOpen ? "pause-sticked" : ""}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="navbar-header">
                    <div className="logo-container">
                    <Image src={logosiyah} alt="Logo" layout="fill" />
                    <Link className="navbar-brand logo-icon" href="/">
                        </Link>
                              </div>
                        
                    </div>
                    <div className="attr-right">
                        <div className="attr-nav attr-box multi">
                            <ul>
                                <li className="side-menu">
                                    <Link href="#" onClick={openInfoBar} scroll={false}>
                                        <span className="bar-1"></span>
                                        <span className="bar-2"></span>
                                        <span className="bar-3"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="side">
                        <Link href="#" className="close-side" onClick={closeInfoBar} scroll={false}><i className="icon_close"></i></Link>
                        <div></div>
                        <div className="widget">
                            <div className="logo">
                                <Image src={logosiyahv1} alt="Logo" />
                            </div>
                        </div>
                        <div className="widget address">
                            <div>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <p>Adres</p>
                                            <strong>Valide-i Atik Mah. Nuhkuyusu Cad. No:73A Üsküdar/İstanbul</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>Email</p>
                                            <a href="mailto:Info@famimarlik.net"><strong>Info@famimarlik.net</strong></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>İletişim</p>
                                            <a href="tel:+90-531-296-69-79"><strong>+90 531 296 6979</strong></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget social">
                            <ul className="link">
                                <SocialShare />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="overlay-screen"></div>
            </nav>
        </header>
    );
};

export default HeaderStyle1;