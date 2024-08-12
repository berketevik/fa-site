import Link from 'next/link';
import React from 'react';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link href="/">Home</Link></li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/service-single/1">Service Single</Link></li>
                        <li><Link href="/portfolio-single/1">Project Single</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/not-found">Error Page</Link></li>
                    </ul>
                </li>
                <li><Link href="/portfolio-single/1">Portfolio</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;