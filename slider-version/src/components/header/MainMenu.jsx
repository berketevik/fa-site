import Link from 'next/link';
import React from 'react';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link href="/">Ana Sayfa</Link></li>
                <li><Link href="/all-projects">Tüm Projeler</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;