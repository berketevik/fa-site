"use client"
import React from 'react';
import logo from '@/assets/img/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import useStickyMenu from '@/hooks/useStickyMenu';
import MainMenu from './MainMenu';
import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import logosiyahv1 from '@/assets/img/meto.png';
import SocialShare from '../utilities/SocialShare';
const HeaderStyle2 = () => {

    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Subscribe!")
    }

    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();

    return (
        <header>
            <nav className={`navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs on no-full ${isMenuSticky ? 'sticked' : ''}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" href="/">
                            <h1>FA</h1>
                            {/* <Image src={logo} className="logo" alt="Logo" /> */}
                        </Link>
                    </div>
                    
                    <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                    <Image src={logo} alt="Logo" />
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                            <i className="fa fa-times"></i>
                        </button>
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
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
                <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
            </nav>
        </header>
    );
};

export default HeaderStyle2;